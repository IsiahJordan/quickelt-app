import express from "express";

import { default as accountRouter } from './account.ts'
import { default as quizRouter } from './quiz.ts'
import { default as helperRouter } from './helper.ts'

const router = express.Router();
router.use("/account", accountRouter);
router.use("/quiz", quizRouter);
router.use("/resource", helperRouter);

export default router;
