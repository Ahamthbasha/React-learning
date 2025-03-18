// import React, { memo, useState } from 'react'

// const ChildComponent=memo(({name})=>{
//     console.log("child component")

//     return(
//         <div>
//             <h1>{name}</h1>
//         </div>
//     )
// })


// const ReactMemo = () => {
//     const [count,setCount] = useState(0)
//     const [name,setName] = useState("basha")
//     console.log("parent component")
//   return (
//     <div>
//       <h1>count is :{count}</h1>
//       <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
//       <button onClick={()=>setName("ahamathabasha")}>SetName</button>

//       <ChildComponent name={name}/>
//     </div>
//   )
// }



// export default ReactMemo


// import React,{useEffect, useMemo, useState} from 'react'

// const ReactMemo = () => {
//     const [countOne,setCountOne] = useState(0)
//     const [countTwo,setCountTwo] = useState(0)

//     const isEven=useMemo(()=>{
//         console.log("expensive function running")
//         for(let i=0;i<20000000;i++){
            
//         }
//         return countOne % 2 === 0 ? "EVEN" : "ODD"
//     },[countOne])

//   return (
//     <div>
//       <p>{isEven}</p>
//       <button onClick={()=>setCountOne((countOne)=>countOne+1)}>CountOne:{countOne}</button>
//       <button onClick={()=>setCountTwo((countTwo)=>countTwo+1)}>CountTwo:{countTwo}</button>
//     </div>
//   )
// }

// export default ReactMemo



// import React,{memo, useState} from 'react'

// const ChildComponent=memo(({name})=>{
//     console.log("child component")

//     return(
//         <div>
//             <h1>{name}</h1>
//         </div>
//     )
// })

// const ReactMemo = () => {

//     const [count,setCount] = useState(0)
//     const [name,setName]  = useState("Basha")

//     console.log("Parent rendered")
//   return (
//     <div>
//       <h1>count:{count}</h1>
//       <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
//       <button onClick={()=>setName("Ahamathbasha")}>setName</button>

//       <ChildComponent name={name}/>
//     </div>
//   )
// }

// export default ReactMemo


// import React, { useState,useMemo } from 'react'

// const ReactMemo = () => {

//     const [countOne,setCountOne] = useState(0)
//     const [countTwo,setCountTwo] = useState(0)

//     const isEven=useMemo(()=>{
//         console.log("expensive function")
//         for(let i=0;i<2000000;i++){

//         }
//         return countOne % 2 === 0 ? "Even" : "Odd"
//     },[countOne])

//   return (
//     <div>
//         <p>{isEven}</p>
//       <button onClick={()=>setCountOne((count)=>count+1)}>CountOne:{countOne}</button>
//       <button onClick={()=>setCountTwo((count)=>count+1)}>CountTwo:{countTwo}</button>
//     </div>
//   )
// }

// export default ReactMemo


// import React, { useCallback,useState } from 'react'

// const ChildComponent=({handleClick})=>{
//     console.log("child")
//     return(
//         <div>
//             <button onClick={handleClick}>Click</button>
//         </div>
//     )
// }

// const ReactMemo = () => {

//     const [count,setCount] = useState(0)

//     console.log("parent")

//     const handleClick=useCallback(()=>{
//         console.log("button clicked")
//     },[])

//   return (
//     <div>

//     <h1>{count}</h1>
//     <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
//     <ChildComponent handleClick={handleClick}/>
//     </div>
//   )
// }

// export default ReactMemo


import React, { act, useReducer } from 'react'

const initialValue={
    count:0
}

const reducer=(state,action) => {
    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1}
        case "DECREMENT":
            return {count:state.count-1}
        case "RESET":
            return {count:0}
        default:
            return state
    }
}

const ReactMemo = () => {
    const [state,dispatch] = useReducer(reducer,initialValue)
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}

export default ReactMemo


