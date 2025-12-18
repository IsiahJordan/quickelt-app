import Log from "../utility/log.ts";
import { verifyToken } from "../utility/security.ts";

// authenticate
export async function authToken(req, res, next) {
  const log = Log("authToken");
  const token = req.cookies.access_token;
  log.debug(token);

  if (!token) {
    log.danger("account not authenticated");
    return res.status(403).json({ 
      success: false, 
      message: "You are not authenticate to use this request" 
    });
  }
  
  log.info("finish authenticating");
  next();
}

export async function isAuthorize(req, res, next) {
  const log = Log("isAuthorize");
  const token = req.cookies.access_token;
  
  const decoded = await verifyToken(token);
  log.debug(`${ decoded.role }`);
  
  if ("user" !== decoded.role) {
    return res.status(403).json({
      success: false,
      message: "You are not authorize to use this request"
    });
  }

  log.debug("end of auth");
  next();
}
