export const meetupDay = (year, month, dayOfTheWeek, descriptor) => {
  let date = new Date(year, month);

  const WEEKDAYS = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];
  const ORDER = [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
  ];

  let sameWeekDayInMonth = [];
  let day;

  for (let i = 1; i < 32; i++) {
    date.setDate(i);
    /* In the if statement below, I had to check if the day of the
    week of the iterated day was the same as the argument dayOfTheWeek.
    I also had to check whether or not the iterated day was from the corresponding month argument, because there are months with less
    than 31 days. */
    if (dayOfTheWeek.toLowerCase() === WEEKDAYS[date.getDay()] &&
      date.getMonth() === month) {
      sameWeekDayInMonth.push(date.getDate());
    } else {
      continue;
    }
  }

  const isTeenth = (int) => {
    if (int > 12 && int < 20) {
      return true;
    } else {
      return false;
    }
  }
  
  if (descriptor === 'teenth') {
    day = sameWeekDayInMonth.find(isTeenth);
  } else if (descriptor === 'last') {
    day = sameWeekDayInMonth.slice(-1)[0];
  } else if (ORDER.includes(descriptor)) {
    if (sameWeekDayInMonth[ORDER.indexOf(descriptor)] === undefined) {
      throw this;
    } else {
      day = sameWeekDayInMonth[ORDER.indexOf(descriptor)];
    }
  }

  return date = new Date(year, month, day);
}