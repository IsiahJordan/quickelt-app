import express from 'express'
import multer from 'multer'

const router = express.Router();
const upload = multer({dest: "uploads/"});

import { fetchQuiz, createQuiz, createTag, fetchAllQuiz, fetchAllTag } from '../controllers/quizController.ts'
import { requireBody, requireParams } from '../middleware/validation.ts'

router.get("/fetch", requireParams, fetchQuiz);
router.get("/list", requireParams, fetchAllQuiz);
router.post("/create", upload.single("image"), requireBody, createQuiz);
router.get("/tag/list", fetchAllTag);
router.post("/tag/create", requireBody, createTag);

export default router;
