import express from "express";

import { default as accountRouter } from './account.ts'
import { default as quizRouter } from './quiz.ts'
import { default as helperRouter } from './helper.ts'
import { default as sharedRouter } from './shared.ts'

const router = express.Router();
router.use("/account", accountRouter);
router.use("/quiz", quizRouter);
router.use("/shared", sharedRouter);
router.use("/resource", helperRouter);

export default router;
