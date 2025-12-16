import express from 'express'

const router = express.Router();

import { fetchQuizTag, fetchTagQuiz, createQuizTag } from '../controllers/sharedController.ts'
import { requireBody, requireParams } from '../middleware/validation.ts'

router.get("/fetch/quiz/tag", requireParams, fetchQuizTag);
router.get("/fetch/tag/quiz", requireParams, fetchTagQuiz);
router.post("/create/quiz/tag", requireBody, createQuizTag);

export default router;
