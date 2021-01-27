import {
  ADD_NOTE,
  CHANGE_NOTE,
  Note,
  NotesActionTypes,
  REMOVE_NOTE,
  NOTE_COUNT,
  NotesLength,
} from './types';

export const addNote = (note: Note): NotesActionTypes => ({
  type: ADD_NOTE,
  payload: note,
});

export const checkNotesLength = (note: number):  NotesActionTypes => ({
    type: NOTE_COUNT,
    payload: note,
});
export const changeNote = (newNote: Note, oldNote: Note): NotesActionTypes => ({
  type: CHANGE_NOTE,
  payload: { newNote, oldNote },
});

export const removeNote = (index: number): NotesActionTypes => ({
  type: REMOVE_NOTE,
  payload: index,
});
