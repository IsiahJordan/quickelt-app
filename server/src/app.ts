import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import router from './routes/router.ts'
import cookieParser from 'cookie-parser'
import Log from './utility/log.ts'
import path from 'path'
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const log = Log("app");
log.info("create app");
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(process.cwd(), 'uploads')));

app.use(cookieParser());

app.use(helmet());

app.use("/data", router);

export default app;
