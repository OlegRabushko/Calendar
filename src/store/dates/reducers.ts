import { combineReducers } from 'redux';
import { createDates } from 'utils/dates';
import {
  CurrentDate,
  YearsState,
  CurrentDateActionTypes,
  YearsActionTypes,
  SET_YEAR,
  SET_MONTH,
} from './types';

const initialYearsState: YearsState = createDates(2021, 2032);

const initialCurrentDateState: CurrentDate = {
  day: 0,
  month: 0,
  year: 2021,
};

const yearsReducer = (
  state: YearsState = initialYearsState,
  action: YearsActionTypes,
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const currentDateReducer = (
  state: CurrentDate = initialCurrentDateState,
  action: CurrentDateActionTypes,
) => {
  switch (action.type) {
    case SET_YEAR:
      return {
        ...state,
        year: state.year + action.payload,
      };
    case SET_MONTH:
      return {
        ...state,
        month: state.month + action.payload,
      };
    default:
      return state;
  }
};

export const datesReducer = combineReducers({
  years: yearsReducer,
  currentDate: currentDateReducer,
});
