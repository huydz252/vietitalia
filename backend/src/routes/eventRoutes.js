import express from 'express';
import { verifyAdminToken } from '../middleware/verifyAdmin.js';
import multer from 'multer';
import { getEvents, createEvent, updateEvent, deleteEvent } from '../controllers/eventController.js';

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.get('/', getEvents);
router.post('/', verifyAdminToken, upload.array('media', 50), createEvent); 
router.put('/:id', verifyAdminToken, upload.array('media', 50), updateEvent);
router.delete('/:id', verifyAdminToken, deleteEvent);

export default router;