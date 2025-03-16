import React,{useEffect,useState} from 'react'

const UseEffectLayout = () => {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log("count",count)
    },[count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount((count)=>count+1)}>Add</button>
    </div>
  )
}

export default UseEffectLayout
