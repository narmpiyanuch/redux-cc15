import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, FETCH_NOTE } from "./actionType";

// action creator
export const addNoteAction = (input) => {
  return {
    type: ADD_NOTE,
    payload: input,
  };
};

export const deleteNoteAction = (noteId) => {
  return {
    type: DELETE_NOTE,
    payload: noteId,
  };
};

export const fetchNoteAction = () => {
  return {
    type: FETCH_NOTE,
  };
};
