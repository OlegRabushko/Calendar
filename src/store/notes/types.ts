export const REMOVE_NOTE = 'REMOVE_NOTE';
export const ADD_NOTE = 'ADD_NOTE';
export const CHANGE_NOTE = 'CHANGE_NOTE';
export const NOTE_COUNT ='NOTE_COUNT';

export interface Note {
  year: number;
  month: number;
  day: number;
  hour: number | null;
  text: string;
  count: number;
}
export type NotesState = Note[];

export interface NotesLength {
  count: any;
}

interface AddNoteAction {
  type: typeof ADD_NOTE;
  payload: Note;
}
interface NoteCountAction {
  type: typeof NOTE_COUNT;
  payload: number;
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
  | NoteCountAction
  | ChangeNoteAction;
