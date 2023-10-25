import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // เหมือนกับ store.subscribe()
import {
  deleteNoteAction,
  fetchNoteAction,
} from "../redux/actions/actionCreator";

import "./NotesList.css";

const NotesList = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  // console.log("Z", notes);

  useEffect(() => {
    dispatch(fetchNoteAction());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteNoteAction(id));
  };

  return (
    <>
      <h1>Notes List</h1>

      <div className="item-container">
        {notes.map((note) => (
          <div className="item-content" key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotesList;
