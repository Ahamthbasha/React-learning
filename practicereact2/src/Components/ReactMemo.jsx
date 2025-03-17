import React,{useState,memo} from 'react'

// const ChildComponent=memo(({count}) => {
//     console.log("childComponent rendered")
//     return <h2>{count}</h2>
// })

// const ReactMemo = () => {
//     const [count,setCount] = useState(0)
//     const [theme,setTheme] = useState(false)

//   return (
//     <div>
//         <ChildComponent count={count}/>
//         <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
//         <button onClick={()=>setTheme((curr)=>!curr)}>Toggle</button>
//     </div>
//   )
// }


const ChildComponent=memo(({count})=>{
    console.log("child component rendered")
    return <h1>{count}</h1>
})


const ReactMemo=()=>{

    const [count,setCount] = useState(0)
    const [toggle,setToggle] = useState(false)
    return(
        <div>

            <ChildComponent count={count}/>

            <button onClick={()=>setCount(count+1)}>Increment</button>

            <button onClick={()=>setToggle((prev)=>!prev)}>Toggle</button>



        </div>
    )
}

export default ReactMemo
