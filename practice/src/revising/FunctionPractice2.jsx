import React,{useState} from "react";

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



// const FunctionPractice2=(props) =>{

//     const sendData=() => {
//         props.onReceiveData("hello parent")
//     }

//     return(
//         <div>
//             <h1>Child component</h1>
//             <button onClick={sendData}>Click to send data to parent</button>
//         </div>
//     )
// }

// const FunctionPractice2=(props)=>{


//     const passData=()=>{
//         props.onReceiveData("hello parent")
//     }

//     return(
//         <div>
//             <h1>Parent Component</h1>
//             <button onClick={passData}>pass message to parent</button>
//         </div>
//     )
// }


// const FunctionPractice2=(props)=>{

//     const sendMessage=()=>{
//         props.oreceiveData("hello")
//     }

//     return(
//         <div>
//             <h1>ChildComponent</h1>
//             <button onClick={sendMessage}>click</button>
//         </div>
//     )

// }


const FunctionPractice2=(props) => {

    const {count} =props

    const[count2,setCount] = useState(count)

    const decrement=() => {
        setCount((count2)=>count2-1)
    }
    return(
        <>
        <button onClick={decrement}>Decrement</button>
        <p>{count2}</p>
        </>
    )
}

export default FunctionPractice2