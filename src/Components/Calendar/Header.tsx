import { FC } from 'react';
import style from './Header.module.scss';
import { DatesState } from 'store/dates/types';
import { CurrentDate } from './Calendar';
import { NavLink } from 'react-router-dom';

interface DateProps {
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
  months: string[];
  dates: DatesState;
  currentDate: CurrentDate;
}

export const Header: FC<DateProps> = ({
  setMonth,
  setYear,
  currentDate,
  months,
  dates,
}) => {
  const nextMonth = () => setMonth(1);
  const previousMonth = () => setMonth(-1);
  const nextYear = () => setYear(1);
  const previousYear = () => setYear(-1);
  const isPreviousYearDisabled = currentDate.year === dates.years[0].year;
  const isNextYearDisabled =
    currentDate.year === dates.years[dates.years.length - 1].year;

  return (
    <div className={style.container}>
      <div className={style.yearContainer}>
        <button
          onClick={previousYear}
          className={style.yearPrevBtn}
          disabled={isPreviousYearDisabled}
        ></button>
        <span className={style.yearText}>{currentDate.year}</span>
        <button
          onClick={nextYear}
          className={style.yearSecBtn}
          disabled={isNextYearDisabled}
        ></button>
      </div>
      <div className={style.monthContainer}>
        <button
          className={style.monthPrevBtn}
          onClick={previousMonth}
          disabled={currentDate.month === 0}
        ></button>
        <span className={style.monthText}>{months[currentDate.month]}</span>
        <button
          className={style.monthSecBtn}
          onClick={nextMonth}
          disabled={currentDate.month === 11}
        ></button>
      </div>
      <NavLink to="/noteslist">
        <button className={style.notesListBtn}>Notes List</button>
      </NavLink>
    </div>
  );
};
