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

        // Lọc để chỉ lấy những item là thư mục thực sự (thường không có đuôi file như .jpg, .png) 
        // và kiểm tra xem tên thư mục có phải là số hay không
        let maxFolderNumber = 0;
        if (folders && folders.length > 0) {
            folders.forEach(item => {
                // Supabase list trả về object, nếu là thư mục con thì nó sẽ không có metadata (hoặc tùy cấu trúc)
                // Ta phân tách bằng cách ép kiểu số tên thư mục
                const folderNum = parseInt(item.name, 10);
                if (!isNaN(folderNum) && folderNum > maxFolderNumber) {
                    maxFolderNumber = folderNum;
                }
            });
        }

        // Số thư mục tiếp theo sẽ bằng số thư mục lớn nhất hiện tại + 1
        const nextFolderNumber = String(maxFolderNumber + 1).padStart(2, '0');

        let uploadedMedia = []; 

        if (req.files && req.files.length > 0) {
            const uploadPromises = req.files.map(async (file) => {
                const cleanFileName = file.originalname.toLowerCase()
                    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    .replace(/\s+/g, '_')
                    .replace(/[^a-z0-9.-]/g, '');

                // Bây giờ đường dẫn chắc chắn ăn theo thư mục lớn nhất + 1 (06 + 1 = 07)
                const fileName = `events/${nextFolderNumber}/${cleanFileName}`; 
                
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

                return { type: fileType, url: publicUrlData.publicUrl };
            });

            uploadedMedia = await Promise.all(uploadPromises);
        }

        const event_media = uploadedMedia.length > 0 ? JSON.stringify(uploadedMedia) : null;

        const { data, error } = await supabase
            .from('events')
            .insert([{ title, description, event_date, location, event_media, status, lang }]) 
            .select();

        if (error) throw error;
        res.status(201).json({ success: true, message: 'Thêm sự kiện thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};