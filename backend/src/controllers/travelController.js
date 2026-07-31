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

        // Tìm số thư mục lớn nhất hiện tại (ví dụ: 01, 02...)
        let maxFolderNumber = 0;
        if (folders && folders.length > 0) {
            folders.forEach(item => {
                const folderNum = parseInt(item.name, 10);
                if (!isNaN(folderNum) && folderNum > maxFolderNumber) {
                    maxFolderNumber = folderNum;
                }
            });
        }

        // Số thư mục tiếp theo sẽ bằng số lớn nhất hiện tại + 1 (Định dạng: 01, 02, 03...)
        const nextFolderNumber = String(maxFolderNumber + 1).padStart(2, '0');
        let uploadedMedia = [];

        if (req.files && req.files.length > 0) {
            const uploadPromises = req.files.map(async (file) => {
                // Làm sạch tên file gốc của máy khách
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

        // 2. Lưu chính xác vào trường travel_media dưới dạng chuỗi JSON
        const travel_media = uploadedMedia.length > 0 ? JSON.stringify(uploadedMedia) : null;

        const { data, error } = await supabase
            .from('italy_travel')
            .insert([{ title, slug, content, travel_media, category, lang }]) // Khớp chuẩn travel_media
            .select();

        if (error) throw error;
        console.log('Inserted travel data:', data);
        res.status(201).json({ success: true, message: 'Thêm bài viết và Media thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};