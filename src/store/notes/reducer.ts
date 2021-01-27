
import {
  ADD_NOTE,
  CHANGE_NOTE,
  NotesActionTypes,
  NotesState,
  REMOVE_NOTE,
  NOTE_COUNT,
  NotesLength
} from './types';

const initialState: NotesState = [];
const initialNotesLengthState: NotesLength = {
  count: 0
};

export const NotesLengthReducer = (
  state: NotesLength =  initialNotesLengthState,
  action: NotesActionTypes
)=>{
  switch(action.type){
    case NOTE_COUNT:
      return{
        ...state, 
      count: state.count + action.payload,
    }
    default:
        return state;
  }
  }

export const notesReducer = (
  state: NotesState = initialState,
  action: NotesActionTypes,
) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case CHANGE_NOTE:
      const noteIndex = state.findIndex(
        (note) =>
          note.year === action.payload.oldNote.year &&
          note.month === action.payload.oldNote.month &&
          note.day === action.payload.oldNote.day &&
          note.hour === action.payload.oldNote.hour,
      );
      return [
        ...state.slice(0, noteIndex),
        action.payload.newNote,
        ...state.slice(noteIndex + 1, state.length),
      ];
    case REMOVE_NOTE:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1, state.length),
      ];
      
    default:
      return state;
  }
};

