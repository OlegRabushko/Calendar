import moment from 'moment';
import { Month, Year } from 'store/dates/types';

const getDaysForMonth = (year: number, month: number) => {
  const currentMonth = moment({ year, month });
  const daysInMonth = currentMonth.daysInMonth();
  const days = new Array(daysInMonth).fill(null).reduce(
    (days, _, currentDayIndex) => [
      ...days,
      {
        dayOfWeek: currentMonth.clone().add({ days: currentDayIndex }).day(),
      },
    ],
    [],
  );

  return days;
};

const getMonths = (year: number): Month[] =>
  new Array(12).fill(null).map((_, monthIndex) => ({
    days: getDaysForMonth(year, monthIndex),
  }));

export const createDates = (yearFrom: number, yearTo: number) => {
  const years = new Array(yearTo - yearFrom)
    .fill(null)
    .map<Year>((_, yearIndex) => ({
      months: getMonths(yearFrom + yearIndex),
      year: yearFrom + yearIndex,
    }));

  return years;
};

export const stringPropertiesToNumber = (params: object) =>
  Object.entries(params).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: Number(value) }),
    {},
  );
