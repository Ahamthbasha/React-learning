import React, { useState,useEffect, useRef } from "react";

// const InputFocus=() => {
//     const inputRef=useRef(null)

//     const focusInput=() => {
//         inputRef.current.focus()
//     }


//     return(
//         <div>
//             <input ref={inputRef} type='text'/>
//             <button onClick={focusInput}>click</button>
//         </div>
//     )
// }

// export default InputFocus


// const StoreUseRef=() => {

//     const [count,setCount] = useState(0)

//     const prevCountRef=useRef()

//     useEffect(()=>{
//         prevCountRef.current=count
//     },[count])

//     return(
//         <div>
//             <h1>current:{count}</h1>
//             <h2>PreviousCount:{prevCountRef.current}</h2>

//             <button onClick={()=>setCount(count+1)}>click</button>
//         </div>
//     )
// }

// export default StoreUseRef

const NoRenderRef=() =>{
    const renderCount=useRef(0)

    renderCount.current +=1

    return(
        <div>
            <h2>render Count:{renderCount.current}</h2>
        </div>
    )
}

export default NoRenderRef