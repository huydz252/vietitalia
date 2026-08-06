import supabase from '../config/supabase.js'; 

export const getCourses = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('courses')
            .select('*')
            .order('id', { ascending: false });

        if (error) throw error;
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('courses')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        if (!data) return res.status(404).json({ success: false, message: 'Không tìm thấy khóa học' });

        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const createCourse = async (req, res) => {
    try {
        const { title, slug, description, content, duration, fee, lang } = req.body;

        // Quét danh sách các thư mục hiện có trong bucket 'vietitalia_media/courses'
        const { data: folders, error: listError } = await supabase.storage
            .from('vietitalia_media')
            .list('courses', { limit: 100, offset: 0 });

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
            targetFolderNumber = maxFolderNumber + 1;
        } else {
            targetFolderNumber = maxFolderNumber > 0 ? maxFolderNumber : 1;
        }

        // Đảm bảo dạng chuỗi 2 chữ số (01, 02...) để tạo đường dẫn Storage chuẩn
        const folderString = String(targetFolderNumber).padStart(2, '0');
        let uploadedMedia = [];

        if (hasFiles) {
            // TRƯỜNG HỢP 1: CÓ FILE TẢI LÊN -> Upload lên Storage
            const uploadPromises = req.files.map(async (file) => {
                const cleanFileName = file.originalname.toLowerCase()
                    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    .replace(/\s+/g, '_')
                    .replace(/[^a-z0-9.-]/g, '');

                const fileName = `courses/${folderString}/${cleanFileName}`;

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

            uploadedMedia = await Promise.all(uploadPromises);
        } else {
            // TRƯỜNG HỢP 2: KHÔNG FILE (Bài tiếng Ý dùng chung) -> Quét file có sẵn trong folder cũ
            const { data: existingFiles } = await supabase.storage
                .from('vietitalia_media')
                .list(`courses/${folderString}`, { limit: 100 });

            if (existingFiles && existingFiles.length > 0) {
                uploadedMedia = existingFiles
                    .filter(file => file.name !== '.emptyFolderPlaceholder')
                    .map(file => {
                        const fileName = `courses/${folderString}/${file.name}`;
                        const { data: publicUrlData } = supabase.storage
                            .from('vietitalia_media')
                            .getPublicUrl(fileName);

                        return {
                            type: file.name.match(/\.(mp4|webm|avi|mov)$/i) ? 'video' : 'image',
                            url: publicUrlData.publicUrl
                        };
                    });
            }
        }

        const course_media = uploadedMedia.length > 0 ? JSON.stringify(uploadedMedia) : null;
        const parsedFee = fee ? parseInt(fee, 10) : 0;

        // Chèn bản ghi vào bảng courses
        const { data, error } = await supabase
            .from('courses')
            .insert([{ 
                title, 
                slug, 
                description, 
                content, 
                duration, 
                fee: parsedFee, 
                course_media, 
                media_folder: targetFolderNumber, // Ép kiểu int4 theo schema DB
                lang 
            }])
            .select();

        if (error) throw error;
        res.status(201).json({ success: true, message: 'Thêm khóa học thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, slug, description, content, duration, fee, lang } = req.body;

        const { data: oldCourse, error: fetchError } = await supabase
            .from('courses')
            .select('*')
            .eq('id', id)
            .single();

        if (fetchError || !oldCourse) {
            return res.status(404).json({ success: false, message: 'Không tìm thấy khóa học cần sửa' });
        }

        let course_media = oldCourse.course_media;
        let currentFolder = oldCourse.media_folder;

        if (req.files && req.files.length > 0) {
            // Nếu chưa có media_folder thì mới tiến hành quét tìm folder tiếp theo
            if (!currentFolder) {
                const { data: folders } = await supabase.storage
                    .from('vietitalia_media')
                    .list('courses', { limit: 100 });

                let maxFolderNumber = 0;
                if (folders && folders.length > 0) {
                    folders.forEach(item => {
                        const folderNum = parseInt(item.name, 10);
                        if (!isNaN(folderNum) && folderNum > maxFolderNumber) {
                            maxFolderNumber = folderNum;
                        }
                    });
                }
                currentFolder = maxFolderNumber + 1;
            }

            const folderString = String(currentFolder).padStart(2, '0');

            const uploadPromises = req.files.map(async (file) => {
                const cleanFileName = file.originalname.toLowerCase()
                    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    .replace(/\s+/g, '_')
                    .replace(/[^a-z0-9.-]/g, '');

                const fileName = `courses/${folderString}/${cleanFileName}`;

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
            course_media = JSON.stringify(uploadedMedia);
        }

        const parsedFee = fee ? parseInt(fee, 10) : oldCourse.fee;

        const { data, error } = await supabase
            .from('courses')
            .update({ 
                title, 
                slug, 
                description, 
                content, 
                duration, 
                fee: parsedFee, 
                course_media, 
                media_folder: currentFolder, 
                lang 
            })
            .eq('id', id)
            .select();

        if (error) throw error;
        res.status(200).json({ success: true, message: 'Cập nhật khóa học thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;

        const { data, error } = await supabase
            .from('courses')
            .delete()
            .eq('id', id)
            .select();

        if (error) throw error;
        res.status(200).json({ success: true, message: 'Xóa khóa học thành công', data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};