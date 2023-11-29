import React from "react";

function CompletedTasks({ todos }) {
  const handleClear = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {todos
        .sort((a, b) => new Date(b.endDate) - new Date(a.endDate))
        .map((todo) => {
          return (
            <li
              key={todo.id + 1}
              className="completedtask__task"
              style={{ textDecoration: "line-through" , color: "green" }}
            >
              <span>{todo.value}</span> - Task completed:{" "}
              <strong>{todo.endDate.toLocaleString()}</strong>
            </li>
          );
        })}

      <button className="cleartask__btn" onClick={handleClear}> Clear Task</button>
    </>
  );
}

export default CompletedTasks;
