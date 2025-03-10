import React from "react";

const ChildComponent =(props) => {

    const sendData=() =>{
        props.onReceivedData("hello parent")
    }

    return(
        <div>
            <h1>child Component</h1>
            <button onClick={sendData}>send message to parent</button>
        </div>
    )
}

export default ChildComponent