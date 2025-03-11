import React,{useState} from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

function App() {
  const [tasks, setTask] = useState([])

  const addTask=(task)=>{
    setTask((prevTask)=>[...prevTask,{...task,id:Date.now()}])
  }

  const deleteTask=(id)=>{
    setTask(tasks.filter((task)=> task.id != id))
  }

  const editTask=(id,updatedTask) => {
    setTask(tasks.map((task)=>task.id === id ? updatedTask:task))
  }

  return (
   <div>
    <h1>To do list</h1>
    <TaskForm addTask={addTask}/>
    <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask}/>
   </div>
  )
}

export default App
