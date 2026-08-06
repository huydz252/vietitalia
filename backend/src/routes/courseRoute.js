import express from 'express';
import multer from 'multer';
import { getCourses, createCourse, updateCourse, deleteCourse } from '../controllers/courseController.js';

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.get('/', getCourses);
router.post('/', upload.array('media', 50), createCourse);
router.put('/:id', upload.array('media', 50), updateCourse);
router.delete('/:id', deleteCourse);

export default router;