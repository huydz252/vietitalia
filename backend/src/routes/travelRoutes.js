import express from 'express';
import multer from 'multer'; 
import { getTravels, createTravel } from '../controllers/travelController.js';

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.get('/', getTravels);     
router.post('/', upload.array('media', 50), createTravel);   

export default router;