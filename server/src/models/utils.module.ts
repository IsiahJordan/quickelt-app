
// every verify function below are designed
// to handle response of the database
// and send as an output
export function verifyInsert(result, log) {
  log.info("called");
  if (result.rowCount > 0) {
    log.info("insert is successful");
    return true;
  }
  else {
    log.danger("failed to insert");
    return false;
  }
}

export function verifyUpdate(result: object) {
  if (result) {
    return result;
  }
  else {
    return undefined;
  }
}

export function verifySelect(result) {
  if (result.rowCount > 0) {
    return result.rows;
  }

  return undefined;
}
