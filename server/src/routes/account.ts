import express from 'express'

const router = express.Router();

import { register } from '../controllers/accountController.ts'
import { requireBody, requireParams } from '../middleware/validation.ts'

router.post("/register", requireParams, register);

export default router;
