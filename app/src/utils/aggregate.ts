import Log from './log'

export function getDateFromTZ(timestamptz: string) {
  return (/\d{4}-\d{2}-\d{2}/g).exec(timestamptz);
}

export function getTimeFromTZ(timestamptz: string) {
  return (/\d{2}:\d{2}:\d{2}.\d{3}/g).exec(timestamptz);
}

export function getHoursFromTime(time: string) {
  return (/^\d{2}/g).exec(time);
}

export function getMinutesFromTime(time: string) {
  const getNumber = (/\d{2}/g).exec(time);
  return (/\d{2}/g).exec(getNumber);
}

export function getSecondsFromTime(time: string) {
  const getNumber = (/\d{2}\./g).exec(time);
  return (/\d{2}/g).exec(getNumber);
}

export function getMillisecondsFromTime(time: string) {
  return (/\d{3}/g).exec(getNumber);
}

export function isExpiredTZ(timestamptz: string, expected: string) {
  const log = Log("isExperiedTZ");

  const tz_date = getDateFromTZ(timestamptz);
  const tz_time = getTimeFromTZ(timestamptz);
  const ex_date = getDateFromTZ(expected);
  const ex_time = getTimeFromTZ(expected);

  log.debug(`tz date ${tz_date}`);
  log.debug(`tz time ${tz_time}`);
  log.debug(`ex date ${ex_date}`);
  log.debug(`ex time ${ex_time}`);
  

  if (tz_date?.[0] !== ex_date?.[0]) {
    log.debug("no valid dates");
    return false;
  }
  
  const tz_hours = parseInt(getHoursFromTime(tz_time));
  const ex_hours = parseInt(getHoursFromTime(ex_time));
  const tz_minutes = parseInt(getMinutesFromTime(tz_time));
  const ex_minutes = parseInt(getMinutesFromTime(ex_time));
  const tz_seconds = parseInt(getSecondsFromTime(tz_time));
  const ex_seconds = parseInt(getSecondsFromTime(ex_time));
  const tz_milliseconds = parseInt(getMillisecondsFromTime(tz_time));
  const ex_milliseconds = parseInt(getMillisecondsFromTime(ex_time));

  log.debug(`tz hours ${tz_hours}`);
  log.debug(`tz minutes ${tz_minutes}`);
  log.debug(`tz seconds ${tz_seconds}`);
  log.debug(`tz milliseconds ${tz_milliseconds}`);
  log.debug(`ex hours ${ex_hours}`);
  log.debug(`ex minutes ${ex_minutes}`);
  log.debug(`ex seconds ${ex_seconds}`);
  log.debug(`ex milliseconds ${ex_milliseconds}`);

  if (tz_hours?.[0] > ex_hours?.[0]) {
    return false;
  }
  else if (tz_minutes?.[0] > ex_minutes?.[0]) {
    return false;
  }
  else if (tz_seconds?.[0] > ex_seconds?.[0]) {
    return false;
  }
  else if (tz_milliseconds?.[0] > ex_milliseconds?.[0]) {
    return false;
  }

  return true;
}
