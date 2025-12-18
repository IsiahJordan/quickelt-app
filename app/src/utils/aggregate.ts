

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
  const tz_date = getDateFromTZ(timestamptz);
  const tz_time = getTimeFromTZ(timestamptz);
  const ex_date = getDateFromTZ(expected);
  const ex_time = getTimeFromTZ(expected);

  if (tz_date !== ex_date) {
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

  if (tz_hours > ex_hours) {
    return false;
  }
  else if (tz_minutes > ex_minutes) {
    return false;
  }
  else if (tz_seconds > ex_seconds) {
    return false;
  }
  else if (tz_milliseconds > ex_milliseconds) {
    return false;
  }

  return true;
}
