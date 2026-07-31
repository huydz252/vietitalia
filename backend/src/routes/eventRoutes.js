import express from 'express';
import multer from 'multer';
import { getEvents, createEvent } from '../controllers/eventController.js';

const router = express.Router();

// Cấu hình multer lưu file vào RAM tạm thời
const upload = multer({ storage: multer.memoryStorage() });

router.get('/', getEvents);
router.post('/', upload.array('media', 50), createEvent); 

export default router;