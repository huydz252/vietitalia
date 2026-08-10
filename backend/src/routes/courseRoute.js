import express from 'express';
import { verifyAdminToken } from '../middleware/verifyAdmin.js';
import multer from 'multer';
import { getCourses, createCourse, updateCourse, deleteCourse } from '../controllers/courseController.js';

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.get('/', getCourses);
router.post('/', verifyAdminToken, upload.array('media', 50), createCourse);
router.put('/:id', verifyAdminToken, upload.array('media', 50), updateCourse);
router.delete('/:id', verifyAdminToken, deleteCourse);

export default router;