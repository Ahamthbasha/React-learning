// import React,{useState} from 'react'

// const StopWatch = () => {
//     const [count,setCount] = useState(0)
//     const [interval,setIntervalId] = useState(null)

//     const startTime=()=>{
//         if(interval !== null){
//             return
//         }
//         const id=setInterval(()=>{
//             setCount((count)=>count+1)
//         },1000)

//         setIntervalId(id)
//     }

//     const stopTime=() => {

//         clearInterval(interval)
//         setIntervalId(null)
//     }

//     const resetTime=()=>{
//         setCount(0)
//     }

//   return (
//     <div>
//       <h1>Stop Watch</h1>
//       <h2>time:{count}</h2>
//       <button onClick={startTime}>Start</button>
//       <button onClick={stopTime}>Stop</button>
//       <button onClick={resetTime}>Reset</button>
//     </div>
//   )
// }

// export default StopWatch


import React,{useState} from 'react'

const StopWatch = () => {

  const [count,setCount] = useState(0)
  const [interval,setIntervalId] = useState(null)

  const Start=()=>{
    if(interval !== null){
      return
    }
    const id=setInterval(()=>{
      setCount((count)=>count+1)
    },1000)
    setIntervalId(id)
  }

  const Stop=()=>{
    clearInterval(interval)
  }

  const Reset=()=>{
    setCount(0)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Start}>start</button>
      <button onClick={Stop}>Stop</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default StopWatch
