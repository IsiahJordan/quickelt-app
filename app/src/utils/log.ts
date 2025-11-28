// use this as an replacement to console log

class Logger {
  private static instance: Logger;
  private context = "GLOBAL";
  private mode: LogMode = "development";

  private constructor() {}

  private format(level: LogLevel, message: string): string {
    const date = new Date().toUTCString();
    return `[${date}] [${this.context}] [${level.toUpperCase()}] → ${message}`;
  }

  setMode(mode: LogMode) {
    this.mode = mode;
    return this; // allow chaining
  }

  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  withContext(context: string) {
    const child = new Logger();
    child.context = context;
    child.mode = this.mode;
    return child;
  }

  debug(msg: string) {
    if (this.mode === "development") {
      console.debug(this.format("debug", msg));
    }
  }

  info(msg: string) {
    console.info(this.format("info", msg));
  }

  warn(msg: string) {
    if (this.mode === "development") {
      console.warn(this.format("warn", msg));
    }
  }

  danger(msg: string) {
    console.error(this.format("danger", msg));
  }
}

export default function Log(context: string) {
  return Logger.getInstance()
    .setMode("development")
    .withContext(context);
}
