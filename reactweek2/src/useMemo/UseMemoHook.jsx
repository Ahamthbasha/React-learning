import React, { useState,useMemo } from 'react'

const UseMemoHook = () => {
    const [number,setNumber] =useState(0)
    const [dark,setDark] =useState(false)

    const doubleNo=useMemo(()=>{
        return slowFunction(number)
    },[number])

    const themeStyle=useMemo(()=>{
        return {
        backgroundColor:dark ? "black" :"white",
        color:dark?"white":"black"
        }
    })
  return (
    <div>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />


      <button onClick={()=>setDark((cur)=>!cur)}>ToggleTheme</button>

      <div style={themeStyle}>{doubleNo}</div>
    </div>

  )
}

export default UseMemoHook


function slowFunction(no){
    for(let i=0;i<10000000;i++){

    }
    return no*2
}