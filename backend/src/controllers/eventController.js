import { supabase } from '../config/supabase.js';

export const getEvents = async (req, res) => {
    try {
        const { lang } = req.query; 

        let query = supabase
            .from('events')
            .select('*')
            .order('id', { ascending: false }); 

        if (lang) {
            query = query.eq('lang', lang);
        }

        const { data, error } = await query;
        if (error) throw error;

        res.status(200).json({ success: true, data: data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const createEvent = async (req, res) => {
    try {
        const { title, description, event_date, location, status, lang } = req.body;
        
        // 1. Quét trực tiếp danh sách các thư mục bên trong thư mục 'events' trên Storage
        const { data: folders, error: listError } = await supabase.storage
            .from('vietitalia_media')
            .list('events', {
                limit: 100,
                offset: 0
            });

        if (listError) throw listError;

        // Tìm số thư mục lớn nhất hiện tại dựa trên tên dạng số (01, 02, 03...)
        let maxFolderNumber = 0;
        if (folders && folders.length > 0) {
            folders.forEach(item => {
                const folderNum = parseInt(item.name, 10);
                if (!isNaN(folderNum) && folderNum > maxFolderNumber) {
                    maxFolderNumber = folderNum;
                }
            });
        }

        // Số thư mục tiếp theo = số lớn nhất + 1 (Định dạng chuẩn 2 chữ số)
        const nextFolderNumber = String(maxFolderNumber + 1).padStart(2, '0');

        let uploadedMedia = []; 

        if (req.files && req.files.length > 0) {
            const uploadPromises = req.files.map(async (file) => {
                // Làm sạch tên file gốc (Chuyển chữ thường, xóa dấu tiếng Việt/khoảng trắng)
                const cleanFileName = file.originalname.toLowerCase()
                    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    .replace(/\s+/g, '_')
                    .replace(/[^a-z0-9.-]/g, '');

                // Cấu trúc đường dẫn chuẩn: events/01/ten_anh.jpg
                const fileName = `events/${nextFolderNumber}/${cleanFileName}`; 
                
                // Đẩy lên Supabase (Ghi đè bằng upsert nếu người dùng đã tạo folder sẵn)
                const { error: uploadError } = await supabase.storage
                    .from('vietitalia_media')
                    .upload(fileName, file.buffer, { 
                        contentType: file.mimetype,
                        upsert: true 
                    });

                if (uploadError) throw uploadError;

                const { data: publicUrlData } = supabase.storage
                    .from('vietitalia_media')
                    .getPublicUrl(fileName);
                
                const fileType = file.mimetype.startsWith('video') ? 'video' : 'image';

                return {
                    type: fileType,
                    url: publicUrlData.publicUrl
                };
            });

            uploadedMedia = await Promise.all(uploadPromises);
        }

        const event_media = uploadedMedia.length > 0 ? JSON.stringify(uploadedMedia) : null;

        // Lưu thông tin kèm theo trường media_folder vào bảng events
        const { data, error } = await supabase
            .from('events')
            .insert([{ title, description, event_date, location, event_media, media_folder: nextFolderNumber, status, lang }]) 
            .select();

        if (error) throw error;
        res.status(201).json({ success: true, message: 'Thêm sự kiện thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// UPDATE: Cập nhật Sự Kiện
export const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, event_date, location, status, lang } = req.body;

        const { data: oldEvent, error: fetchError } = await supabase
            .from('events')
            .select('*')
            .eq('id', id)
            .single();

        if (fetchError || !oldEvent) {
            return res.status(404).json({ success: false, message: 'Không tìm thấy sự kiện cần sửa' });
        }

        let event_media = oldEvent.event_media;
        let currentFolder = oldEvent.media_folder; // Giữ nguyên giá trị cũ (có thể là null)

        // Chỉ khi người dùng chọn tải ảnh/video mới lên thì mới xử lý folder
        if (req.files && req.files.length > 0) {
            
            // Nếu trước đó chưa có folder (null), tiến hành quét Storage để lấy số tiếp theo
            if (!currentFolder) {
                const { data: folders } = await supabase.storage
                    .from('vietitalia_media')
                    .list('events', { limit: 100 });

                let maxFolderNumber = 0;
                if (folders && folders.length > 0) {
                    folders.forEach(item => {
                        const folderNum = parseInt(item.name, 10);
                        if (!isNaN(folderNum) && folderNum > maxFolderNumber) {
                            maxFolderNumber = folderNum;
                        }
                    });
                }
                currentFolder = String(maxFolderNumber + 1).padStart(2, '0');
            }

            const uploadPromises = req.files.map(async (file) => {
                const cleanFileName = file.originalname.toLowerCase()
                    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    .replace(/\s+/g, '_')
                    .replace(/[^a-z0-9.-]/g, '');

                const fileName = `events/${currentFolder}/${cleanFileName}`;

                const { error: uploadError } = await supabase.storage
                    .from('vietitalia_media')
                    .upload(fileName, file.buffer, { contentType: file.mimetype, upsert: true });

                if (uploadError) throw uploadError;

                const { data: publicUrlData } = supabase.storage
                    .from('vietitalia_media')
                    .getPublicUrl(fileName);

                return {
                    type: file.mimetype.startsWith('video') ? 'video' : 'image',
                    url: publicUrlData.publicUrl
                };
            });

            const uploadedMedia = await Promise.all(uploadPromises);
            event_media = JSON.stringify(uploadedMedia);
        }

        // Cập nhật Database (nếu currentFolder vẫn null thì ghi nhận null)
        const { data, error } = await supabase
            .from('events')
            .update({ title, description, event_date, location, event_media, media_folder: currentFolder, status, lang })
            .eq('id', id)
            .select();

        if (error) throw error;
        res.status(200).json({ success: true, message: 'Cập nhật sự kiện thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// DELETE: Xóa Sự Kiện
export const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;

        // Cậu có thể tùy chọn thêm logic xóa luôn folder ảnh trên Supabase Storage ở đây nếu muốn
        const { data, error } = await supabase
            .from('events')
            .delete()
            .eq('id', id)
            .select();

        if (error) throw error;
        res.status(200).json({ success: true, message: 'Xóa sự kiện thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};