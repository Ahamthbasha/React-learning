// import React,{memo, useState} from 'react'

// const ChildComponent =memo (({name}) => {
//     console.log("child rendered")
//     return(
//         <h1>ChildComponent.Received Name is {name}</h1>
//     )
// })

// const ReactMemo = () => {
//     const [count,setCount] = useState(0)
//     const [name,setName] = useState("basha")

//     console.log("parent rendered")

//   return (
//     <div>
//     <h1>count:{count}</h1>  
//     <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
//     <button onClick={()=>setName("Ahamathbasha")}>SetName</button>
//     <ChildComponent name={name}/>
//     </div>
//   )
// }

// export default ReactMemo


// import React,{useState,memo} from 'react'

// const ChildComponent=memo(({name})=>{
//   console.log("child component is rendered")

//   return(
//     <h1>{name}</h1>
//   )
// })

// const ReactMemo = () => {
//   const [count,setCount] = useState(0)
//   const [name,setName]   = useState("basha")
//   console.log("parent component")
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
//       <button onClick={()=>setName("ahamathbasha")}>ChangeName</button>
//       <ChildComponent name={name}/>
//     </div>
//   )
// }

// export default ReactMemo


import React, { memo, useState } from 'react'

const ChildComponent=memo(({name})=>{
  return(
    <h1>{name}</h1>
  )
})

const ReactMemo = () => {

  const [count,setCount] = useState(0)
  const [name,setName] = useState("basha")
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
      <button onClick={()=>setName("ahamathbasha")}>ChangeName</button>

      <ChildComponent name={name}/>
    </div>
  )
}

export default ReactMemo
