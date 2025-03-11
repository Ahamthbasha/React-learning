import { useState } from "react";
import TaskList from "./Component/TaskList";
import TaskForm from "./Component/TaskForm";
import "./styles.css"


function App() {
  const [tasks, setTasks] = useState([]);


  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;

