import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ACTIONS } from "../reducer/actions";
import '../styles/main.scss';
import { Navigate } from "react-router-dom";

function EditForm({
  handleFinishEdit,
  dispatch,
  todoId,
  oldValue,
  oldPriority,
  oldCalendar,
  oldDescription,
  darkMode,
}) {
  const [newValue, setNewValue] = useState("");
  const [newPriority, setNewPriority] = useState(oldPriority);
  const [newCalendar, setNewCalendar] = useState(oldCalendar);
  const [newDescription, setNewDescription] = useState(oldDescription);

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.EDIT_TODO,
      payload: {
        id: todoId,
        newValue,
        newPriority,
        newCalendar,
        newDescription,
      },
    });
    handleFinishEdit();
    <Navigate to="/" />
  };

  return (
    <div className={`editform ${darkMode ? "darkmode" : ""}`}>
      <div className="editform__form">
        <h3 className="editform__title">Change the content of your task</h3>
        <FontAwesomeIcon
          className="editform__xmark"
          icon={faTimes}
          onClick={handleFinishEdit}
        />

        <form onSubmit={handleSubmitEdit}>
          <div className="editform__input">
            <label htmlFor="task">Type new value: </label>
            <input
              type="text"
              name="task"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              
            />
          </div>

          <div className="editform__input">
        <label htmlFor="priority">Choose priority:</label>
        <select
            name="priority"
            id="priority"
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
            
        >
            <option value=""></option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
    </div>
         

          <div className="editform__input">
            <label htmlFor="description">New Description: </label>
            <input
              type="text"
              name="description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              
            />
          </div>

          <div className="editform__oldvalue">
            Old value: <strong>{oldValue}</strong>
          </div>

          <button type="submit" className="editform__btn">
            Edit task
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditForm;
