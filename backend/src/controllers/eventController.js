import { supabase } from '../config/supabase.js';

export const getEvents = async (req, res) => {
    try {

        let query = supabase
            .from('events')
            .select('*')
            .order('id', { ascending: false }); 

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
        let image_url = null;

        if (req.file) {
            const file = req.file;
            const fileName = `events/${Date.now()}_${file.originalname.replace(/\s+/g, '_')}`;

            const { error: uploadError } = await supabase.storage
                .from('vietitalia_media')
                .upload(fileName, file.buffer, { contentType: file.mimetype });

            if (uploadError) throw uploadError;

            const { data: publicUrlData } = supabase.storage
                .from('vietitalia_media')
                .getPublicUrl(fileName);
            
            image_url = publicUrlData.publicUrl;
        }

        const { data, error } = await supabase
            .from('events')
            .insert([{ title, description, event_date, location, image_url, status, lang }]) 
            .select();

        if (error) throw error;
        res.status(201).json({ success: true, message: 'Thêm sự kiện thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};