
// verify if body exist or else return success false
// this is used for post and put
export function requireBody(req, res, next) {
  if (req.body === undefined) {
    return res.status(400).json({ 
      success: false, 
      message: "Failed request",
      data: undefined
    });
  }

  next();
}

// this is for get
export function requireParams(req, res, next) {
  if (req.params === undefined) {
    return res.status(400).json({ 
      success: false, 
      message: "Failed request",
      data: undefined
    });
  }

  next();
}
