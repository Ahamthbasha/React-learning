import React,{useState,useEffect} from 'react'

function functionComponentCounter() {
    const[count,setCount]=useState(0)

    useEffect(()=>{
        console.log("component mounted and updated")

        return()=>{
            console.log("component will unMount")
        }


    },[count])

  return (
    <div>
        <h1>{count}</h1>

        <button onClick={()=>setCount(count+1)}>click</button>
      
    </div>
  )
}

export default functionComponentCounter