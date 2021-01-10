export const REMOVE_NOTE = 'REMOVE_NOTE';
export const ADD_NOTE = 'ADD_NOTE';
export const CHANGE_NOTE = 'CHANGE_NOTE';

export interface Note {
  year: number;
  month: number;
  day: number;
  hour: number | null;
  text: string;
}

export type NotesState = Note[];

interface AddNoteAction {
  type: typeof ADD_NOTE;
  payload: Note;
}

interface ChangeNoteAction {
  type: typeof CHANGE_NOTE;
  payload: {
    newNote: Note;
    oldNote: Note;
  };
}

interface RemoveNoteAction {
  type: typeof REMOVE_NOTE;
  payload: number;
}

export type NotesActionTypes =
  | AddNoteAction
  | RemoveNoteAction
  | ChangeNoteAction;
