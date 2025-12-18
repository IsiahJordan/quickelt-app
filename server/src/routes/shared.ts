import express from 'express'

const router = express.Router();

import { fetchQuizTag, fetchQuizTaken, fetchTagQuiz, createQuizTag, createQuizTaken } from '../controllers/sharedController.ts'
import { requireBody, requireParams } from '../middleware/validation.ts'
import { authToken, isAuthorize } from '../middleware/auth.ts'

router.get("/fetch/quiz/tag", requireParams, fetchQuizTag);
router.get("/fetch/tag/quiz", requireParams, fetchTagQuiz);
router.post("/fetch/quiz/account", authToken, isAuthorize, requireBody, fetchQuizTaken);
router.post("/create/quiz/tag", requireBody, createQuizTag);
router.post("/create/quiz/account", authToken, isAuthorize, requireBody, createQuizTaken);

export default router;
