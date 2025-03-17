// import React, { useMemo,useState } from 'react'


// const UseMemo = () => {

//     const [no,setNo] = useState(0)
//     const [theme,setTheme] = useState(false)

//     const doubleNo=useMemo(()=>{
//         return slowFunction(no)
//     },[no])

//     const themeStyle=useMemo(()=>{
//         return{
//         backgroundColor:theme?"black":"white",
//         color:theme?"white":"black"
//         }
//     })

//   return (
//     <div>
//       <input type="number" value={no} onChange={(e)=>setNo(parseInt(e.target.value))|| 0}/>

//       <button onClick={()=>setTheme((prev)=>!prev)}>ToggleTheme</button>

//       <div style={themeStyle}>{doubleNo}</div>

//     </div>
//   )
// }

// export default UseMemo

// function slowFunction(no){
//     for(let i=0;i<10000000;i++){

//     }
//     return no*2
// }

// const UseMemo=() => {

//     const [no,setNo] = useState(0)
//     const [theme,setTheme] =useState(false)

//     const themeStyle=useMemo(()=>{return{
//         backgroundColor:theme? "black" :"white",
//         color:theme? "white" : "black"
//     }
// })

//     const doubleNo=useMemo(()=>{
//         return slowFunction(no)
//     })

//     return(
//         <>
//         <input type="number" value={no} onChange={(e)=>setNo(parseInt(e.target.value))|| 0} />

//         <button onClick={()=>setTheme((prev)=>!prev)}>Toggle</button>

//         <div style={themeStyle}>{doubleNo}</div>
//         </>
//     )
// }

// export default UseMemo

// function slowFunction(no){
//     for(let i=0;i<1000000;i++){
        
//     }

//     return no*2
// }



import React,{ useMemo, useState} from 'react'

const UseMemo = () => {

    const [no,setNo] = useState(0)
    const [theme,setTheme] = useState(false)

    const themeStyle=useMemo(()=>{
        return {
            backgroundColor:theme?"black":"white",
            color:theme?"white":"black"
        }
    })

    const doubleNo=useMemo(()=>{
        return slowFunction(no)
    })

  return (
    <div>
      <input type="number" value={no} onChange={(e)=>setNo(parseInt(e.target.value))||0}/>

      <button onClick={()=>setTheme((prev)=>!prev)}>Toggle</button>

      <div style={themeStyle}>{doubleNo}</div>
    </div>
  )
}

export default UseMemo

function slowFunction(no){
    for(let i=0;i<10000000;i++){

    }
    return no*2
}
