import React, { useState } from "react";

const ClickEvent=() => {
    const [message,setMessage] = useState("HI hello")

    const changeMessage=()=>{
        setMessage("button is clicked")
    }

    return(
        <div>
            <h1>{message}</h1>
            <button onClick={changeMessage}>click to modify message</button>
        </div>
    )
}

export default ClickEvent