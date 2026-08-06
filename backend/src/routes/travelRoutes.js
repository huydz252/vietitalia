import express from 'express';
import multer from 'multer'; 
import { getTravels, createTravel, updateTravel, deleteTravel } from '../controllers/travelController.js';

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.get('/', getTravels);     
router.post('/', upload.array('media', 50), createTravel); 
router.put('/:id', upload.array('media', 50), updateTravel);
router.delete('/:id', deleteTravel);  

export default router;