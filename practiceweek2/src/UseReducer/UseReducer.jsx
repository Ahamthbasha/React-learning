// import React, { useReducer } from 'react'

// const UseReducer = () => {
//     const initialValue={
//         count:0
//     }

//     const reducerFn=((state,action)=>{
//         switch(action.type){
//             case "Increment":
//                 return {count:state.count+1}
//             case "Decrement":
//                 return {count:state.count-1}
//             case "Reset":
//                 return {count:0}
//             default:
//                 return state

//         }
//     })

//     const [state,dispatch] = useReducer(reducerFn,initialValue)
//   return (
//     <div>
//         <h1>Count:{state.count}</h1>
//         <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
//         <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
//         <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
//     </div>
//   )
// }

// export default UseReducer


import React, { useReducer } from 'react'

const UseReducer = () => {
    const initialValue={
        count:0
    }
    const reducerFn=(state,action)=>{
        switch(action.type){
            case "Increment":
                return {count:state.count+1}
            case "Decrement":
                return {count:state.count-1}
            case "Reset":
                return {count:0}
            default:
                return state
        }

    }
    const [state,dispatch] = useReducer(reducerFn,initialValue)

  return (
    <div>
      <h1>count:{state.count}</h1>
      <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
    </div>
  )
}

export default UseReducer
