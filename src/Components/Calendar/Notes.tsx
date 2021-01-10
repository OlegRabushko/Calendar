import React, { FC, useMemo } from 'react';
import style from './Notes.module.scss';
import { NoteInputs, NotesInputProps } from './NoteInputs';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { addNote, removeNote, changeNote } from 'store/notes/actions';
import { stringPropertiesToNumber } from 'utils/dates';
import { Note } from 'store/notes/types';

interface NotesData {
  year: string;
  month: string;
  day: string;
}

export const Notes: FC = (props) => {
  const params = useParams<NotesData>();
  const parsedParams = useMemo(
    () =>
      stringPropertiesToNumber(params) as Pick<Note, 'year' | 'month' | 'day'>,
    [params],
  );
  const notes = useSelector((state: RootState) =>
    state.notes.filter(
      (note) =>
        note.year === parsedParams.year &&
        note.month === parsedParams.month &&
        note.day === parsedParams.day,
    ),
  );
  const dispatch = useDispatch();
  const addNoteHandler = () =>
    dispatch(
      addNote({
        ...parsedParams,
        hour: null,
        text: '',
      }),
    );

  const removeNoteHandler = (index: number) => dispatch(removeNote(index));
  const removeLastNoteHandler = () => removeNoteHandler(notes.length - 1);
  const changeNoteHandler = (newNote: Note, oldNote: Note) =>
    dispatch(changeNote(newNote, oldNote));

  return (
    <div className={style.noteContainer}>
      <div className={style.noteInner}>
        <div>
          <form>
            {notes.map(({ year, month, day, hour, text }) => {
              const excludedHours = notes.map((note) => note.hour);
              const onChange: NotesInputProps['onChange'] = (options) => {
                changeNoteHandler(
                  { year, month, day, hour, text, ...options },
                  { year, month, day, hour, text },
                );
              };
              return (
                <div key={[year, month, day, hour].join()}>
                  <NoteInputs
                    hour={hour}
                    text={text}
                    onChange={onChange}
                    excludedHours={excludedHours}
                  />
                </div>
              );
            })}
          </form>
        </div>
        <div className={style.btnsNew}>
          <div>
            {notes.length > 0 ? (
              <button
                onClick={removeLastNoteHandler}
                className={style.btnDelete}
              >
                Delete
              </button>
            ) : null}
          </div>
          <button onClick={addNoteHandler} className={style.btnNew}>
            New note
          </button>
        </div>
        <div>
          <NavLink to="">
            <button className={style.btnOk}>OK</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
