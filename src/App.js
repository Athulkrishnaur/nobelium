import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { title: newTask, isCompleted: false }]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleCompleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    setTasks(newTasks);
  };

  const pendingTasksCount = tasks.filter((task) => !task.isCompleted).length;

  return (
    <div className="todo-container">
      <h1 className="header">Pending Tasks: ({pendingTasksCount})</h1>
      <TodoList
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleCompleteTask={handleCompleteTask}
      />
      <div className="create-task">
        <input type="text" value={newTask} onChange={handleNewTaskChange} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;






