import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { Header } from './Header';
import { DaysGrid } from './DaysGrid';
import style from './Header.module.scss';
import { Route } from 'react-router-dom';
import { Notes } from './Notes';
import { setMonth, setYear } from 'store/dates/actions';
import { ListNotes } from 'Components/Calendar/ListNotes';

export interface CurrentDate {
  year: number;
  month: number;
  day: number;
}

export const Calendar: FC = (props) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dates = useSelector((store: RootState) => store.dates);
  const dispatch = useDispatch();
  const _setYear = (year: number) => dispatch(setYear(year));
  const _setMonth = (month: number) => dispatch(setMonth(month));

  return (
    <>
      <Header
        setMonth={_setMonth}
        setYear={_setYear}
        months={months}
        dates={dates}
        currentDate={dates.currentDate}
      />
      <div className={style.body}>
        <DaysGrid dates={dates} currentDate={dates.currentDate} />
      </div>
      <Route path="/notes/:year/:month/:day" render={() => <Notes />} />
      <Route path="/noteslist" render={() => <ListNotes />} />
    </>
  );
};
