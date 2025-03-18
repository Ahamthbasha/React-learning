// import React,{useState} from 'react'
// import { memo } from 'react'

// const ChildComponent=memo(({name})=>{
//     console.log("childComponent")
//     return(
//         <div>
//             <h1>{name}</h1>
//         </div>
//     )
// })

// const ReactMemo = () => {
//     const [count,setCount] = useState(0)
//     const [name,setName] = useState("ahamath")
//     console.log("parent component rendered")
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
//         <button onClick={()=>setName("ahamathbasha")}>SET NAME</button>
//         <ChildComponent name={name}/>
      
//     </div>
//   )
// }

// export default ReactMemo


import React,{memo, useState} from 'react'

const ChildComponent=memo(({name}) => {
    console.log("child component rendered")

    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
})

const ReactMemo = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("ahamath")
    console.log("parent component")
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
      <button onClick={()=>setName("ahamathbasha")}>setName</button>
      <ChildComponent name={name}/>
    </div>
  )
}

export default ReactMemo
