import express from 'express'

const router = express.Router();

import { fetchQuizTag, fetchQuizTaken, fetchTagQuiz, createQuizTag, createQuizTaken } from '../controllers/sharedController.ts'
import { requireBody, requireParams } from '../middleware/validation.ts'

router.get("/fetch/quiz/tag", requireParams, fetchQuizTag);
router.get("/fetch/tag/quiz", requireParams, fetchTagQuiz);
router.get("/fetch/quiz/account", requireParams, fetchQuizTaken);
router.post("/create/quiz/tag", requireBody, createQuizTag);
router.post("/create/quiz/account", requireBody, createQuizTaken);

export default router;
