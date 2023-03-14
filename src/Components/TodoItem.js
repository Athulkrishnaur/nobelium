import React from "react";

function TodoItem(props) {
  const { index, task, handleDeleteTask, handleCompleteTask } = props;

  return (
    <li className="task" style={{ textDecoration: task.isCompleted ? "line-through" : "" }}>
      {task.title}
      <button onClick={() => handleCompleteTask(index)}>Complete</button>
      <button onClick={() => handleDeleteTask(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;