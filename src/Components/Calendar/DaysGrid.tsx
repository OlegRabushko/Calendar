import { FC } from 'react';
import { DatesState } from 'store/dates/types';
import { Cell } from './Cell';
import style from './DaysGrid.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

interface CellGridProps {
  dates: DatesState;
  currentDate: {
    year: number;
    month: number;
    day: number;
  };
}

export const DaysGrid: FC<CellGridProps> = ({ dates, currentDate }) => {
  console.log(dates.years);

  const currentYear = dates.years.find((elem) => {
    return elem.year === currentDate.year;
  });
  const currentMonth = currentYear?.months.find((elem, index) => {
    return index === currentDate.month;
  });

  const notes = useSelector((state: RootState) => state.notes);
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
                  note=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
