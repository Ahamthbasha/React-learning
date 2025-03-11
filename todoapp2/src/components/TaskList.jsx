import React from "react"
import { useState } from "react"

const TaskList=({tasks,editTask,deleteTask}) => {

    const[editId,setEditId]=useState(null)
    const[editTitle,setTitle]=useState("")
    const[editDate,setDate]=useState("")

    const handleEdit=(task) =>{
        setEditId(task.id),
        setTitle(task.title),
        setDate(task.date)
    }

    const saveEdit=(id)=>{
        editTask(id,{id,title:editTitle,date:editDate})
        setEditId(null)
    }

    return(
        <div>
            <ul>
                {tasks.map((task)=>(
                    <li key={task.id}>
                        {editId === task.id ?(
                            <>
                            <input type="text" value={editTitle} onChange={(e)=>setTitle(e.target.value)} />

                            <input type="date" value={editDate} onChange={(e)=>setDate(e.target.value)} />

                            <button onClick={() => saveEdit(task.id)}>Save</button>
                            </>

                        ):(
                            <>
                            <span>{task.title}-{task.Date}</span>
                            <button onClick={()=>handleEdit(task)}>Edit</button>
                            <button onClick={()=>deleteTask(task.id)}>Delete</button>
                            </>
                        )
                    }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList