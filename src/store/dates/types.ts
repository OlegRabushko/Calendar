export const SET_DATES = 'SET_DATES';
export const SET_WEEKS = 'SET_WEEKS';
export const SET_YEAR = 'SET_YEAR';
export const SET_MONTH = 'SET_MONTH';

export interface Day {
  dayOfWeek: number;
}

export interface Month {
  days: Day[];
}

export interface Year {
  months: Month[];
  year: number;
}

export type YearsState = Year[];

export interface CurrentDate {
  year: number;
  month: number;
  day: number;
}

export interface DatesState {
  years: YearsState;
  currentDate: CurrentDate;
}

interface SetDateAction {
  type: typeof SET_DATES;
  payload: Year[];
}

interface UpdateCurrentDateAction {
  type: typeof SET_YEAR | typeof SET_MONTH;
  payload: number;
}

export type YearsActionTypes = SetDateAction;
export type CurrentDateActionTypes = UpdateCurrentDateAction;
