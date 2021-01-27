import { FC } from 'react';
import style from './Cell.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

interface DayOfWeek {
  month: number;
  year: number;
  day: number;
}

export const Cell: FC<DayOfWeek> = ({ day, year, month }) => {
  const notes = useSelector((state: RootState) => state.notes);

  let notesCount = notes.filter((note) => {
    return note.day === day && note.month === month && note.year === year;
  });

  return (
    <>
      <div className={style.cellContainer}>
        <div className={style.cellDayNumber}>{day}</div>
        <NavLink
          to={`/notes/${year}/${month}/${day}`}
          className={style.noteLinkContainer}
        >
          {notesCount.length === 0 ? (
            <div className={style.notesLink}>no notes</div>
          ) : (
            <div className={style.notesLink}>
              <div className={style.notesCircle}></div>
              <div className={style.notesValue}>{notesCount.length}</div>
            </div>
          )}
        </NavLink>
      </div>
    </>
  );
};
