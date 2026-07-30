import express from 'express';
import multer from 'multer'; // 1. Nhớ import multer vào
import { getTravels, createTravel } from '../controllers/travelController.js';

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.get('/', getTravels);     
router.post('/', upload.single('thumbnail'), createTravel);   

export default router;