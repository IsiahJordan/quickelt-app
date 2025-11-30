import express from "express";

import { default as accountRouter } from './account.ts'
import { default as quizRouter } from './quiz.ts'

const router = express.Router();
router.use("/account", accountRouter);
router.use("/quiz", quizRouter);

export default router;
