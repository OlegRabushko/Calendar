import {
  SET_DATES,
  Year,
  SET_YEAR,
  SET_MONTH,
  YearsActionTypes,
  CurrentDateActionTypes,
} from './types';

export const setDates = (dates: Year[]): YearsActionTypes => ({
  type: SET_DATES,
  payload: dates,
});

export const setYear = (year: number): CurrentDateActionTypes => ({
  type: SET_YEAR,
  payload: year,
});

export const setMonth = (month: number): CurrentDateActionTypes => ({
  type: SET_MONTH,
  payload: month,
});
