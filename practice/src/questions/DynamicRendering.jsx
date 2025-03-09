import React, { useEffect, useState } from "react";

//if-else

// const Greeting=({isLoggedin=true})=>{
//     if(isLoggedin){
//         return <h1>Hello basha</h1>
//     }else{
//         return <h1>Please login</h1>
//     }
// }

//ternary
// const Greeting=({isLoggedIn=true})=>{
//     return(
//         <h1>{isLoggedIn ? "Welcome Back" :"please Login"}</h1>
//     )
// }

//showing list dynamically

// const users = ["Alice", "Bob", "Charlie"];

// const Greeting=()=>{
//     return(
//         <div>
//             {
//                 users.map((user,index)=>(
//                     <li key={index}>{user}</li>
//                 ))
//             }
//         </div>
//     )
// }

//based on state rendering data

// const Greeting=()=>{
//     const[show,setStatus]=useState(false)
    
//     return(
//         <div>
//             <button onClick={()=>setStatus(!show)}>Toggle</button>
//             {show && <p>hello</p>}
//         </div>
//     )
// }

//fetching and displaying data dynamically

const Greeting=()=>{
    const [post,setPost]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>setPost(data.slice(0,5)))
    },[])

    return(
        <div>
            {post.map((p)=>(
                <li>{p.title}</li>
            ))}
        </div>
    )
}


export default Greeting