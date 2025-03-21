// import React,{useCallback, useState} from 'react'

// const ChildComponent=({handleClick})=>{
//     console.log("child render")

//     return(
//         <div>
//             <button onClick={handleClick}>click</button>
//         </div>
//     )
// }


// const UseCallback = () => {

//     const [count,setCount] = useState(0)
//     console.log("parent is rendere")
//     const handleClick=useCallback(() => {
//         console.log("button is clicked")
//     },[])

//   return (
//     <div>
//         <h1>count:{count}</h1>
//         <button onClick={()=>setCount((count)=>count+1)}>Increment</button>

//         <ChildComponent handleClick={handleClick}/>

//     </div>
//   )
// }

// export default UseCallback


// import React, { useCallback, useState } from 'react'

// const ChildComponent=({handleClick})=>{
//     return(
//         <button onClick={handleClick}>click</button>
//     )
// }

// const UseCallback = () => {

//     const [count,setCount] = useState(0)

//     const handleClick=useCallback(()=>{
//         console.log("button clicked")
//     },[])

//   return (
//     <div>

//         <h1>{count}</h1>
//         <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
//         <ChildComponent handleClick={handleClick}/>
//     </div>
//   )
// }

// export default UseCallback

// import React, { useCallback,useState } from 'react'

// const ChildComponent=({handleClick})=>{
//     return(
//         <div>
//             <button onClick={handleClick}>Increment</button>
//         </div>
//     )
// }

// const UseCallback = () => {

//     const [count,setCount] = useState(0)

//     const handleClick=useCallback(()=>{
//         setCount((count)=>count+1)
//     },[])

//   return (
//     <div>
//       <h1>Parent component</h1>
//       <h2>{count}</h2>
//       <ChildComponent handleClick={handleClick}/>
//     </div>
//   )
// }

// export default UseCallback


import React,{useState,useCallback} from 'react'

const ChildComponent=({handleClick})=>{
  return(
    <div>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

const UseCallback = () => {

  const [count,setCount] = useState(0)

  const handleClick=useCallback(()=>{
    setCount((count)=>count+1)
  },[])


  return (
    <div>
      <h1>{count}</h1>
      <ChildComponent handleClick={handleClick}/>
    </div>
  )
}

export default UseCallback

