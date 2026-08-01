import express from 'express';
import multer from 'multer';
import { getEvents, createEvent, updateEvent, deleteEvent } from '../controllers/eventController.js';

const router = express.Router();

// Cấu hình multer lưu file vào RAM tạm thời
const upload = multer({ storage: multer.memoryStorage() });

router.get('/', getEvents);
router.post('/', upload.array('media', 50), createEvent); 
router.put('/:id', upload.array('media', 10), updateEvent);
router.delete('/:id', deleteEvent);

export default router;