import React, { useState } from "react";

const CounterUseState=()=>{
    const [count,setCount]=useState(0)

    return(
        <div>

            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decremen</button>
        </div>
    )
}

export default CounterUseState