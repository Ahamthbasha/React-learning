import React,{useState,useEffect} from 'react'

function IntervalHook() {

    const [count,setCount]=useState(0)

    const tick=() =>{
        setCount(prevCount => prevCount+1)
    }

    useEffect(()=>{
        function doSomething(){
            console.log(somePop)
        }
        doSomething()
        const interval=setInterval(tick,1000)

        return ()=>{
            clearInterval(interval)
        }
    },[someProp])


  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHook