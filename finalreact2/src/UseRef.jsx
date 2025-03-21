// import React, {useState, useRef } from 'react'

// const UseRef = () => {
//     const [value,setValue]=useState("")
//     const inputRef=useRef(null)

//     const handleClick=()=>{
//         inputRef.current.focus()
//     }
//   return (
//     <div>
//       <input type="text" ref={inputRef}  value={value} onChange={(e)=>setValue(e.target.value)} />

//       <button onClick={handleClick}>Submit</button>
//     </div>
//   )
// }

// export default UseRef


// import React,{useState} from 'react'

// const UseRef = () => {

//     const [value,setValue] = useState("")
//   return (
//     <div>
//       <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
//       <h1>{value}</h1>
//     </div>
//   )
// }

// export default UseRef


// import React,{useState} from 'react'

// const UseRef = () => {

//     const [value,setValue] = useState("")
//     const [show,setShow] = useState(false)

//     const handleShow=()=>{
//         setShow((show)=>!show)
//     }
//   return (
//     <div>
//       <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />

//       <button onClick={handleShow}>submit</button>

//       {show && <h1>{value}</h1>}
//     </div>
//   )
// }

// export default UseRef


import React,{useState,useRef,useEffect} from 'react'

const UseRef = () => {

    const [count,setCount] = useState(0)

    const prevCount = useRef()

    useEffect(()=>{
        prevCount.current=count
    },[count])
  return (
    <div>
      <h1>count:{count}</h1>
      <h2>PrevCount:{prevCount.current}</h2>
      <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
    </div>
  )
}

export default UseRef
