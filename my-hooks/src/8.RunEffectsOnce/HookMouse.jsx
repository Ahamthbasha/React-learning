import React,{useState,useEffect} from 'react'

function HookMouse() {

    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logMousePosition = e =>{
    setX(e.clientX)
    setY(e.clientY)
    }

    useEffect(()=>{
        window.addEventListener('mousemove',logMousePosition)
    },[])
  return (
    <div>
      Hooks X-{x} Y-{y}
    </div>
  )
}

export default HookMouse


//we can mimic component dig mount with use effect hook by simply passing an empty array