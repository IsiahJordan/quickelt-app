import express from "express";

import { default as accountRouter } from './account.ts'

const router = express.Router();
router.use("/account", accountRouter);

export default router;
