import Log from '../utility/log.ts'
import path from 'path'

// this is used for process pipeline
// that doesn't use a controller
// therefore, is a substitution for such
export function validate(req, res) {
  const log = Log("validate");

  return res.status(200).json({success: true, message: "successful process"});
}

export function image(req, res) {
  const log = Log("image");

  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
  log.debug(imageUrl);
  
  if (!imageUrl) {
    return res.status(400).json({ success: false, message: "failed to get image" });
  }
  
  log.debug(JSON.stringify(req.file));

  return res.status(200).json({ success: true, message: "successful upload", data: req.file });
}
