import React from "react";

// const ChildComponent=(props)=>{
//     const sendData=()=>{
//         props.onSendData("hello parent")
//     }

//     return(
//         <div>
//             <h1>Child send message</h1>
//             <button onClick={sendData}>click to see child message</button>
//         </div>
//     )
// }










// const FunctionPractice2=(props) => {
//     const {message} =props

//     return(
//         <div>
//             <h1>ChildComponent</h1>
//             <h2>Parent Message:{message}</h2>
//         </div>
//     )
// }



const FunctionPractice2=(props) =>{

    const sendData=() => {
        props.onReceiveData("hello parent")
    }

    return(
        <div>
            <h1>Child component</h1>
            <button onClick={sendData}>Click to send data to parent</button>
        </div>
    )
}





export default FunctionPractice2