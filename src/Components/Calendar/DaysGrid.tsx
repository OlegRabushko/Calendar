import { FC } from 'react';
import { DatesState } from 'store/dates/types';
import { Cell } from './Cell';
import style from './DaysGrid.module.scss';

interface CellGridProps {
  dates: DatesState;
  currentDate: {
    year: number;
    month: number;
    day: number;
  };
}

export const DaysGrid: FC<CellGridProps> = ({ dates, currentDate }) => {
  const currentYear = dates.years.find((elem) => {
    return elem.year === currentDate.year;
  });
  const currentMonth = currentYear?.months.find((elem, index) => {
    return index === currentDate.month;
  });
  return (
    <>
      <div className={style.cellsContainer}>
        {[
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ].map((el) => {
          return <div className={style.weeksName}>{el}</div>;
        })}
        {currentMonth!.days.map((day, index) => {
          return (
            <div
              style={{
                gridColumnStart: index === 0 ? day.dayOfWeek : undefined,
              }}
            >
              <div className={style.cells}>
                <Cell
                  key={index}
                  year={currentDate.year}
                  month={currentDate.month}
                  day={index + 1}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
