import { supabase } from '../config/supabase.js';

export const getTravels = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('italy_travel')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const createTravel = async (req, res) => {
    try {
        // Rút thumbnail_url ra khỏi req.body vì mình sẽ lấy từ file upload
        const { title, slug, content, category } = req.body;
        let thumbnail_url = null;

        // Xử lý file ảnh/video nếu có
        if (req.file) {
            const file = req.file;
            // Lưu vào thư mục travels để không lộn với events
            const fileName = `travels/${Date.now()}_${file.originalname.replace(/\s+/g, '_')}`;

            const { error: uploadError } = await supabase.storage
                .from('vietitalia_media')
                .upload(fileName, file.buffer, {
                    contentType: file.mimetype,
                });

            if (uploadError) throw uploadError;

            // Lấy link public
            const { data: publicUrlData } = supabase.storage
                .from('vietitalia_media')
                .getPublicUrl(fileName);
            
            thumbnail_url = publicUrlData.publicUrl;
        }

        const { data, error } = await supabase
            .from('italy_travel')
            .insert([{ title, slug, content, thumbnail_url, category }])
            .select();

        if (error) throw error;
        res.status(201).json({ success: true, message: 'Thêm bài viết thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};