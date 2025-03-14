import React,{useState} from 'react'

function HookCounterTwo() {
    const initialCount=0
    const [count,setCount]=useState(initialCount)

    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount +1 ) //update count based on the prev state value
        }
    }

  return (
    <div>
        count:{count}
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={incrementFive}>Increment5</button>
    </div>
  )
}

export default HookCounterTwo
