// import React,{useState} from 'react'
// import ChildC from './ChildC'

// const ParentC = () => {

//     const [data,setData] = useState("")

//     const parentFn=(data)=>{
//         setData(data)
//     }
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <h1>Child Component:{data}</h1>
//       <ChildC fn={parentFn}/>
//     </div>
//   )
// }

// export default ParentC


import React, { useState } from 'react'
import ChildC from './ChildC'

const ParentC = () => {

    const [data,setData] = useState("")

    const parentFn=(data)=>{
        setData(data)
    }

  return (
    <div>
    <h1>Parent Component</h1>
    <h1>Child Component Message in Parent Component:{data}</h1>
    <ChildC fn={parentFn}/>
    </div>
  )
}

export default ParentC
