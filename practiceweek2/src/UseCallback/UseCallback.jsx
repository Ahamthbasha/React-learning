// import React, { useCallback, useState,memo } from 'react'

// const ChildComponent=memo(({handleClick})=>{
//     console.log("child component rendered")
//     return(
//         <div>
//             <button onClick={handleClick}>Click</button>
//         </div>
//     )
// })

// const UseCallback = () => {
//     const [count,setCount] = useState(0)

//     const handleClick=useCallback(()=>{
//         console.log("button is clicked")
//     },[])
//     console.log("parent component rendered")
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
//       <ChildComponent handleClick={handleClick}/>
//     </div>
//   )
// }

// export default UseCallback

import React,{useState,memo, useCallback} from 'react'

const ChildComponent=memo(({handleClick})=>{
    console.log("child render")
    return(
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
})

const UseCallback = () => {
    const [count,setCount] = useState(0)
    console.log("parent Component")

    const handleClick=useCallback(()=>{
        console.log("button clicked")
    },[])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount((count)=>count+1)}>Increment</button>

      <ChildComponent handleClick={handleClick}/>
    </div>
  )
}

export default UseCallback
