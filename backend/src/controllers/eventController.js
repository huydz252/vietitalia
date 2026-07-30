import { supabase } from '../config/supabase.js';

export const getEvents = async (req, res) => {
    try {
        // Truy vấn bảng 'events', lấy tất cả các cột ('*')
        // Mẹo: Sắp xếp theo ID hoặc created_at giảm dần để sự kiện mới nhất lên đầu
        const { data, error } = await supabase
            .from('events')
            .select('*')
            .order('id', { ascending: false }); 

        if (error) throw error;

        res.status(200).json({ 
            success: true, 
            data: data 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

export const createEvent = async (req, res) => {
    try {
        // Lúc này multer đã dịch xong FormData, req.body sẽ không còn bị undefined nữa
        const { title, description, event_date, location, status } = req.body;
        let image_url = null;

        // Xử lý nếu có file gửi lên
        if (req.file) {
            const file = req.file;
            const fileName = `events/${Date.now()}_${file.originalname.replace(/\s+/g, '_')}`;

            const { error: uploadError } = await supabase.storage
                .from('vietitalia_media')
                .upload(fileName, file.buffer, {
                    contentType: file.mimetype,
                });

            if (uploadError) throw uploadError;

            const { data: publicUrlData } = supabase.storage
                .from('vietitalia_media')
                .getPublicUrl(fileName);
            
            image_url = publicUrlData.publicUrl;
        }

        // Lưu vào Database
        const { data, error } = await supabase
            .from('events')
            .insert([{ title, description, event_date, location, image_url, status }])
            .select();

        if (error) throw error;
        res.status(201).json({ success: true, message: 'Thêm sự kiện thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};