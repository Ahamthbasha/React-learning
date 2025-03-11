import React from "react";

const ChildComponent=(props)=>{
    const sendData=()=>{
        props.onSendData("hello parent")
    }

    return(
        <div>
            <h1>Child send message</h1>
            <button onClick={sendData}>click to see child message</button>
        </div>
    )
}

export default ChildComponent