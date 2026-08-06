    import express from 'express';
import { 
    getCourses, 
    getCourseById, 
    createCourse, 
    updateCourse, 
    deleteCourse 
} from '../controllers/courseController.js';

const router = express.Router();

// Lấy danh sách & Chi tiết
router.get('/', getCourses);
router.get('/:id', getCourseById);

// Thêm mới, Cập nhật (Hỗ trợ upload tối đa 50 file media) & Xóa
router.post('/', upload.array('media', 50), createCourse);
router.put('/:id', upload.array('media', 50), updateCourse);
router.delete('/:id', deleteCourse);

export default router;