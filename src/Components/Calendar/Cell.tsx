import { FC } from 'react';
import style from './Cell.module.scss';
import { NavLink, useParams } from 'react-router-dom';

interface DayOfWeek {
  month: number;
  year: number;
  day: number;
  note: string;
}

export const Cell: FC<DayOfWeek> = ({ day, year, month }) => {
  return (
    <>
      <div className={style.cellContainer}>
        <div className={style.cellDayNumber}>{day}</div>
        <NavLink
          to={`/notes/${year}/${month}/${day}`}
          className={style.noteLinkContainer}
        >
          <div className={style.noteLink}>empty</div>
        </NavLink>
      </div>
    </>
  );
};
