import express from 'express'

const router = express.Router();

import { requireBody, requireParams } from '../middleware/validation.ts'
import { validate } from '../controllers/helperController.ts'
import { authToken, isAuthorize } from '../middleware/auth.ts'

router.post("/fetch/token", authToken, isAuthorize, validate);

export default router;
