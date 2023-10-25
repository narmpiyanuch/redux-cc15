import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  FETCH_NOTE,
} from "../actions/actionType";

// note : {id:string, title:string, content:string}

const initialState = {
  notes: [],
};

// Reducer == FN 2 parameters
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTE:
      const notes = localStorage.getItem("notes")
        ? JSON.parse(localStorage.getItem("notes"))
        : [];
      return { ...state, notes: notes };
    case ADD_NOTE:
      const newNotes = [...state.notes, action.payload];
      localStorage.setItem("notes", JSON.stringify(newNotes));
      return { ...state, notes: newNotes };
    case DELETE_NOTE:
      const filterdNoted = state.notes.filter((n) => n.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(filterdNoted));
      return {
        ...state,
        notes: filterdNoted,
      };
    default:
      return state;
  }
};

export default noteReducer;
