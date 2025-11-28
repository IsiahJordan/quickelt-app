import Log from '../utility/log.ts'

// NOTE: all verify function are design as to verify
// specific actions out of the database and is used as
// an replacement for res in the return statement

// use this for insert based output, state is used to verify
// what to do with response
export async function verifyInsert(state, res) {
  const log = Log("verifyInsert");

  if (!state) {
    log.danger("failed state");
    return res.status(401).json({
      success: false,
      message: "failed insert",
      data: undefined
    });
  }

  log.debug("successful state");
  return res.status(201).json({
    success: true,
    message: "successful insert",
    data: undefined
  });
}

// select based output
/*
export function verifySelect(data: object, res: Response) {
  if (!data) {
    return res.status(400).json({
      success: false,
      message: "failed selection",
      data: undefined
    });
  }

  return res.status(200).json({
    success: true,
    message: "successful selection",
    data: data
  });

}*/
