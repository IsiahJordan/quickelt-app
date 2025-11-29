import express from 'express'

const router = express.Router();

import { register, login } from '../controllers/accountController.ts'
import { requireBody, requireParams } from '../middleware/validation.ts'

router.post("/register", requireBody, register);
router.post("/login", requireBody, login);

export default router;
