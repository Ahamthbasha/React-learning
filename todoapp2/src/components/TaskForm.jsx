import React,{useState} from "react";

const TaskForm=({addTask}) => {
    const[title,setTitle] = useState('')
    const[date,setDate] =useState('')
    const handleInput=(e)=>{
        setTitle(e.target.value)
    }

    const handleDateInput=(e) => {
        setDate(e.target.value)
    }

    const handleForm=(e)=>{
        e.preventDefault()
        if(!title || !date){
            return
        }
        addTask({title,date})
        setDate("")
        setTitle("")
    }


    return(
       <form onSubmit={handleForm}>
        <input type="text" value={title} onChange={handleInput}/>
        <input type="date" value={date} onChange={handleDateInput}/>
        <button type='submit'>Add Task</button>
       </form> 
    )
}

export default TaskForm