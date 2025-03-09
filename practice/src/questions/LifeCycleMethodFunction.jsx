import React, { useState,useEffect } from "react";

const LifeCycleFuncitonCounter=()=>{
    const [count,setCount] =useState(0)

    useEffect(()=>{
        console.log("component is mounted and updated")

        return()=>{
            console.log("component is unmounted")
        }
    },[count])

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>click</button>
        </div>
    )

}

export default LifeCycleFuncitonCounter