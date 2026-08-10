import express from 'express';
import { verifyAdminToken } from '../middleware/verifyAdmin.js';
import multer from 'multer'; 
import { getTravels, createTravel, updateTravel, deleteTravel } from '../controllers/travelController.js';

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.get('/', getTravels);     
router.post('/', verifyAdminToken, upload.array('media', 50), createTravel); 
router.put('/:id', verifyAdminToken, upload.array('media', 50), updateTravel);
router.delete('/:id', verifyAdminToken, deleteTravel);  

export default router;