import React, { FC, useRef, useState } from 'react';
import style from './ListNotes.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { NotesState } from 'store/notes/types';

export const ListNotes: FC = () => {
  const startDateInputRef = useRef<HTMLInputElement>(null);
  const endDateInputRef = useRef<HTMLInputElement>(null);
  const notes = useSelector((state: RootState) => state.notes);
  const [num, setNum] = useState(['']);
  const [notesValue, setNotesValue] = useState<NotesState>([]);

  const startDateInput = () => {
    if (!startDateInputRef.current) return;
    const firstDate = startDateInputRef.current.value;
    return firstDate;
  };
  const endDateInput = () => {
    if (!endDateInputRef.current) return;
    const endDate = endDateInputRef.current.value;
    return endDate;
  };

  const setFirstYear = () => startDateInput()?.slice(0, 4);
  const setFirstMonth = () => {
    if (startDateInput()?.slice(5, 7).split('')[0] === '0') {
      return startDateInput()?.slice(5, 7).split('')[1];
    }
    return startDateInput()?.slice(5, 7);
  };
  const setFirstDay = () => {
    if (startDateInput()?.slice(8, 10).split('')[0] === '0') {
      return startDateInput()?.slice(8, 10).split('')[1];
    }
    return startDateInput()?.slice(8, 10);
  };

  const setEndYear = () => endDateInput()?.slice(0, 4);
  const setEndMonth = () => {
    if (endDateInput()?.slice(5, 7).split('')[0] === '0') {
      return endDateInput()?.slice(5, 7).split('')[1];
    }
    return endDateInput()?.slice(5, 7);
  };
  const setEndDay = () => {
    if (endDateInput()?.slice(8, 10).split('')[0] === '0') {
      return endDateInput()?.slice(8, 10).split('')[1];
    }
    return endDateInput()?.slice(8, 10);
  };

  let showBtn = () => {
    const newNotesValue = notes.filter((note) => {
      return (
        note.day >= Number(setFirstDay()) &&
        note.day <= Number(setEndDay()) &&
        note.month >= Number(setFirstMonth()) - 1 &&
        note.month <= Number(setEndMonth()) - 1 &&
        note.year >= Number(setFirstYear()) &&
        note.year <= Number(setEndYear())
      );
    });
    setNotesValue(newNotesValue);
    const replaceStartDate = Number(startDateInput()?.replace(/\D+/g, ''));
    const replaceEndDate = Number(endDateInput()?.replace(/\D+/g, ''));
    if (startDateInput() === '') {
      alert('please set start date!');
    } else if (endDateInput() === '') {
      alert('Please set end date!');
    } else if (replaceStartDate > replaceEndDate) {
      alert(`Start date can't be older then end date!`);
    }
    const notesArray = [];
    const SetNotesValueSort = newNotesValue.sort(
      (prev, next) => prev.day - next.day,
    );
    for (let i = 0; i < SetNotesValueSort.length; i++) {
      notesArray.push(
        `${SetNotesValueSort[i].year}.${
          SetNotesValueSort[i].month + 1 < 10
            ? `0${SetNotesValueSort[i].month + 1}`
            : SetNotesValueSort[i].month + 1
        }.${
          SetNotesValueSort[i].day + 1 < 10
            ? `0${SetNotesValueSort[i].day + 1}`
            : SetNotesValueSort[i].day + 1
        } - ${SetNotesValueSort[i].text}`,
      );
      setNum(notesArray);
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.headline}>Notes</div>
        <div className={style.inputsLine}>
          <div className={style.wordFromAndTo}>From</div>
          <input
            type="date"
            className={style.inputs}
            ref={startDateInputRef}
            min="2021-01-01"
            max="2031-12-31"
          ></input>
          <div className={style.wordFromAndTo}>To</div>
          <input
            type="date"
            className={style.inputs}
            ref={endDateInputRef}
            min="2021-01-01"
            max="2031-12-31"
          ></input>
        </div>
        <div>
          <button onClick={showBtn} className={style.btnShow}>
            Show
          </button>
        </div>
        <div className={style.out} id="out"></div>
        <div className={style.out}>
          {!notesValue.length ? (
            <div className={style.notesAbsent}>no notes!</div>
          ) : (
            num.map((el) => {
              return <div className={style.notesText}>{el}</div>;
            })
          )}
        </div>
        <NavLink to="">
          <button className={style.btnClose}>Close</button>
        </NavLink>
      </div>
    </>
  );
};
