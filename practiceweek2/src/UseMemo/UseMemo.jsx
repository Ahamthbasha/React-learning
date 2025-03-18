// import React, { useState,useMemo } from 'react'

// const UseMemo = () => {
//     const [countOne,setCountOne] = useState(0)
//     const [countTwo,setCountTwo] =useState(0)

//     const isEven=useMemo(()=>{
//         console.log("expensive calculation")
//         for(let i=0;i<2000000000;i++){

//         }
//         return countOne % 2 == 0 ?"Even":"odd"
//     },[countOne])

//   return (
//     <div>
//       <p>{isEven}</p>
//       <button onClick={()=>setCountOne((countOne)=>countOne+1)}>CountOne:{countOne}</button>
//       <button onClick={()=>setCountTwo((countTwo)=>countTwo+1)}>CountTwo:{countTwo}</button>


//     </div>
//   )
// }

// export default UseMemo


import React,{useState,useMemo} from 'react'

const UseMemo = () => {

    const [countOne,setCountOne] = useState(0)
    const [countTwo,setCountTwo] = useState(0)

    const isEven=useMemo(()=>{
        console.log("expensive function")
        for(let i=0;i<2000000000;i++){

        }
        return countOne%2===0? "Even":"Odd"
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
