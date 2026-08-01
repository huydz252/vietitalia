import { supabase } from '../config/supabase.js';

export const getTravels = async (req, res) => {
    try {
        const { lang } = req.query; 
        
        let query = supabase
            .from('italy_travel')
            .select('*')
            .order('created_at', { ascending: false });

        if (lang) {
            query = query.eq('lang', lang);
        }

        const { data, error } = await query;
        if (error) throw error;

        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const createTravel = async (req, res) => {
    try {
        const { title, slug, content, category, lang } = req.body; 
        
        // 1. Quét trực tiếp danh sách các thư mục bên trong thư mục 'travels' trên Storage
        const { data: folders, error: listError } = await supabase.storage
            .from('vietitalia_media')
            .list('travels', {
                limit: 100,
                offset: 0
            });

        if (listError) throw listError;

        // Tìm số thư mục lớn nhất hiện tại trong folder travels
        let maxFolderNumber = 0;
        if (folders && folders.length > 0) {
            folders.forEach(item => {
                const folderNum = parseInt(item.name, 10);
                if (!isNaN(folderNum) && folderNum > maxFolderNumber) {
                    maxFolderNumber = folderNum;
                }
            });
        }

        // Số thư mục tiếp theo = số lớn nhất + 1
        const nextFolderNumber = String(maxFolderNumber + 1).padStart(2, '0');
        let uploadedMedia = [];

        if (req.files && req.files.length > 0) {
            const uploadPromises = req.files.map(async (file) => {
                // Làm sạch tên file gốc
                const cleanFileName = file.originalname.toLowerCase()
                    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    .replace(/\s+/g, '_')
                    .replace(/[^a-z0-9.-]/g, '');

                // Cấu trúc đường dẫn chuẩn: travels/01/ten_anh.jpg
                const fileName = `travels/${nextFolderNumber}/${cleanFileName}`;

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

        const travel_media = uploadedMedia.length > 0 ? JSON.stringify(uploadedMedia) : null;

        // Lưu thông tin kèm theo trường media_folder vào bảng italy_travel
        const { data, error } = await supabase
            .from('italy_travel')
            .insert([{ title, slug, content, travel_media, media_folder: nextFolderNumber, category, lang }])
            .select();

        if (error) throw error;
        console.log('Inserted travel data:', data);
        res.status(201).json({ success: true, message: 'Thêm bài viết thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// UPDATE: Cập nhật Bài viết Du lịch
export const updateTravel = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, slug, content, category, lang } = req.body;

        const { data: oldTravel, error: fetchError } = await supabase
            .from('italy_travel')
            .select('*')
            .eq('id', id)
            .single();

        if (fetchError || !oldTravel) {
            return res.status(404).json({ success: false, message: 'Không tìm thấy bài viết' });
        }

        let travel_media = oldTravel.travel_media;
        let currentFolder = oldTravel.media_folder; // Giữ nguyên giá trị cũ (có thể là null)

        // Chỉ khi người dùng chọn tải ảnh/video mới lên thì mới xử lý folder
        if (req.files && req.files.length > 0) {
            
            // Nếu trước đó chưa có folder (null), tiến hành quét Storage để lấy số tiếp theo
            if (!currentFolder) {
                const { data: folders } = await supabase.storage
                    .from('vietitalia_media')
                    .list('travels', { limit: 100 });

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

                const fileName = `travels/${currentFolder}/${cleanFileName}`;

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
            travel_media = JSON.stringify(uploadedMedia);
        }

        // Cập nhật Database (nếu currentFolder vẫn null thì ghi nhận null)
        const { data, error } = await supabase
            .from('italy_travel')
            .update({ title, slug, content, travel_media, media_folder: currentFolder, category, lang })
            .eq('id', id)
            .select();

        if (error) throw error;
        res.status(200).json({ success: true, message: 'Cập nhật bài viết thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// DELETE: Xóa Bài viết Du lịch
export const deleteTravel = async (req, res) => {
    try {
        const { id } = req.params;

        const { data, error } = await supabase
            .from('italy_travel')
            .delete()
            .eq('id', id)
            .select();

        if (error) throw error;
        res.status(200).json({ success: true, message: 'Xóa bài viết thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};