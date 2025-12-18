import Log from '../utility/log.ts'
import path from 'path'

// this is used for process pipeline
// that doesn't use a controller
// therefore, is a substitution for such
export function validate(req, res) {
  const log = Log("validate");

  return res.status(200).json({success: true, message: "successful process"});
}
