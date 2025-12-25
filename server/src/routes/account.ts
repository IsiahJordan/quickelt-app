import express from 'express'

const router = express.Router();

import { register, login, fetchAccount } from '../controllers/accountController.ts'
import { requireBody, requireParams } from '../middleware/validation.ts'

router.post("/register", requireBody, register);
router.post("/login", requireBody, login);
router.post("/fetch", fetchAccount);

export default router;
