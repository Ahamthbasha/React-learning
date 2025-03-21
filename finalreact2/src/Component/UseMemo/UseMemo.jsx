// import React, { useMemo, useState } from 'react'



// const UseMemo = () => {
//     const [countOne,setCountOne] = useState(0)
//     const [countTwo,setCountTwo] = useState(0)
    
//     const isEven=useMemo(()=>{
//         console.log("Expensive calculation")
//         for(let i=0;i<2000000000;i++){

//         }
//         return countOne % 2 === 0 ? "Even" :"Odd"
//     },[countOne])
    
//   return (
//     <div>
//       <p>{isEven}</p>
//       <button onClick={()=>setCountOne((countOne)=>countOne+1)}>countOne:{countOne}</button>
//       <button onClick={()=>setCountTwo((countTwo)=>countTwo+1)}>countTwo:{countTwo}</button>
//     </div>
//   )
// }

// export default UseMemo


// import React,{useMemo, useState} from 'react'

// const UseMemo = () => {
//   const [countOne,setcountOne] = useState(0)
//   const [countTwo,setcountTwo] = useState(0)

//   const isEven=useMemo(()=>{
//     console.log("expensive calculation")
//     for(let i=0;i<20000000000;i++){

//     }
//     return countOne % 2 === 0 ? "Even" : "Odd"
//   },[countOne])

//   return (
//     <div>
//       <p>{isEven}</p>
//       <button onClick={()=>setcountOne((countOne)=>countOne+1)}>countOne:{countOne}</button>
//       <button onClick={()=>setcountTwo((countTwo)=>countTwo+1)}>countTwo:{countTwo}</button>
//     </div>
//   )
// }

// export default UseMemo


import React, { useMemo,useState } from 'react'

const UseMemo = () => {

  const [countOne,setCountOne] = useState(0)
  const [countTwo,setCountTwo] = useState(0)

  const isEven=useMemo(()=>{
    console.log("expensive calculation")
    for(let i=0;i<2000;i++){

    }
    return countOne % 2 === 0 ? "Even" : "Odd"
  },[countOne])

  return (
    <div>
      <p>{isEven}</p>
      <button onClick={()=>setCountOne((countOne)=>countOne+1)}>countOne:{countOne}</button>
      <button onClick={()=>setCountTwo((countTwo)=>countTwo+1)}>countTwo:{countTwo}</button>
    </div>
  )
}

export default UseMemo
