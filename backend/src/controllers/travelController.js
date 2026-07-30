import { supabase } from '../config/supabase.js';

export const getTravels = async (req, res) => {
    try {
        const { lang } = req.query; // Nhận biến lang từ Frontend
        
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
        // Bổ sung thêm biến lang
        const { title, slug, content, category, lang } = req.body; 
        let thumbnail_url = null;

        if (req.file) {
            const file = req.file;
            const fileName = `travels/${Date.now()}_${file.originalname.replace(/\s+/g, '_')}`;

            const { error: uploadError } = await supabase.storage
                .from('vietitalia_media')
                .upload(fileName, file.buffer, { contentType: file.mimetype });

            if (uploadError) throw uploadError;

            const { data: publicUrlData } = supabase.storage
                .from('vietitalia_media')
                .getPublicUrl(fileName);
            
            thumbnail_url = publicUrlData.publicUrl;
        }

        const { data, error } = await supabase
            .from('italy_travel')
            // Thêm lang vào lệnh insert
            .insert([{ title, slug, content, thumbnail_url, category, lang }])
            .select();

        if (error) throw error;
        res.status(201).json({ success: true, message: 'Thêm bài viết thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};