import { supabase } from '../config/supabase.js';

// GET: Lấy danh sách sự kiện
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

// CREATE: Thêm Sự Kiện Mới (Đã đón slug)
export const createEvent = async (req, res) => {
    try {
        // 1. Nhận thêm `slug` từ FormData
        const { title, slug, description, event_date, location, status, lang } = req.body;
        
        // Quét lấy danh sách thư mục trong 'events'
        const { data: folders, error: listError } = await supabase.storage
            .from('vietitalia_media')
            .list('events', { limit: 100, offset: 0 });

        if (listError) throw listError;

        let maxFolderNumber = 0;
        if (folders && folders.length > 0) {
            folders.forEach(item => {
                const folderNum = parseInt(item.name, 10);
                if (!isNaN(folderNum) && folderNum > maxFolderNumber) {
                    maxFolderNumber = folderNum;
                }
            });
        }

        let targetFolderNumber;
        const hasFiles = req.files && req.files.length > 0;

        if (hasFiles) {
            targetFolderNumber = String(maxFolderNumber + 1).padStart(2, '0');
        } else {
            targetFolderNumber = maxFolderNumber > 0 
                ? String(maxFolderNumber).padStart(2, '0') 
                : '01';
        }

        let uploadedMedia = []; 

        if (hasFiles) {
            const uploadPromises = req.files.map(async (file) => {
                const cleanFileName = file.originalname.toLowerCase()
                    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    .replace(/\s+/g, '_')
                    .replace(/[^a-z0-9.-]/g, '');

                const fileName = `events/${targetFolderNumber}/${cleanFileName}`; 
                
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
                
                return {
                    type: file.mimetype.startsWith('video') ? 'video' : 'image',
                    url: publicUrlData.publicUrl
                };
            });

            uploadedMedia = await Promise.all(uploadPromises);
        }

        const event_media = uploadedMedia.length > 0 ? JSON.stringify(uploadedMedia) : null;

        // 2. Insert bao gồm cả trường `slug` vào DB
        const { data, error } = await supabase
            .from('events')
            .insert([{ title, slug, description, event_date, location, event_media, media_folder: targetFolderNumber, status, lang }]) 
            .select();

        if (error) throw error;
        res.status(201).json({ success: true, message: 'Thêm sự kiện thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// UPDATE: Cập nhật Sự Kiện (Đã đón slug)
export const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        // 1. Nhận thêm `slug` từ FormData
        const { title, slug, description, event_date, location, status, lang } = req.body;

        const { data: oldEvent, error: fetchError } = await supabase
            .from('events')
            .select('*')
            .eq('id', id)
            .single();

        if (fetchError || !oldEvent) {
            return res.status(404).json({ success: false, message: 'Không tìm thấy sự kiện cần sửa' });
        }

        let event_media = oldEvent.event_media;
        let currentFolder = oldEvent.media_folder;

        if (req.files && req.files.length > 0) {
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

        // 2. Update bao gồm cả trường `slug` vào DB
        const { data, error } = await supabase
            .from('events')
            .update({ title, slug, description, event_date, location, event_media, media_folder: currentFolder, status, lang })
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