import express from 'express'
import multer from 'multer'

const upload = multer({dest: "uploads/"});

const router = express.Router();

import { requireBody, requireParams } from '../middleware/validation.ts'
import { validate } from '../controllers/helperController.ts'
import { authToken, isAuthorize } from '../middleware/auth.ts'

router.post("/fetch/token", authToken, isAuthorize, validate);
router.post("/upload/image", upload.single('image'), validate);

export default router;
