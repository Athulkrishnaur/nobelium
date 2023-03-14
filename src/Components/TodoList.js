import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { tasks, handleDeleteTask, handleCompleteTask } = props;

  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          index={index}
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleCompleteTask={handleCompleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;