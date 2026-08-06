    import express from 'express';
import { 
    getCourses, 
    getCourseById, 
    createCourse, 
    updateCourse, 
    deleteCourse 
} from '../controllers/courseController.js';
import upload from '../middlewares/uploadMiddleware.js'; // Middleware upload multer hiện tại của cậu

const router = express.Router();

// Lấy danh sách & Chi tiết
router.get('/', getCourses);
router.get('/:id', getCourseById);

// Thêm mới, Cập nhật (Hỗ trợ upload tối đa 10 file media) & Xóa
router.post('/', upload.array('media', 50), createCourse);
router.put('/:id', upload.array('media', 50), updateCourse);
router.delete('/:id', deleteCourse);

export default router;