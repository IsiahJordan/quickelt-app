import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import router from './routes/router.ts'
import cookieParser from 'cookie-parser'
import Log from './utility/log.ts'
import path from 'path'

const log = Log("app");
log.info("create app");
const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cookieParser());

app.use(helmet());

app.use("/data", router);

export default app;
