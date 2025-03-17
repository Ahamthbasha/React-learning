// import React, { useReducer } from 'react'

// const ACTIONS={
//     INCREMENT:"increment",
//     DECREMENT:"decrement"
// }

// function reducerFn(state,action){
//     switch(action.type){
//         case ACTIONS.INCREMENT:
//             return {count:state.count+1}
//         case ACTIONS.DECREMENT:
//             return {count:state.count-1}
//         default:
//             return state
//     }
// }

// const UseReducer = () => {
//     const [state,dispatch] = useReducer(reducerFn,{count:1})

//     const increment=(()=>{
//         dispatch({type:ACTIONS.INCREMENT})
//     })

//     const decrement=(()=>{
//         dispatch({type:ACTIONS.DECREMENT})
//     })
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   )
// }

// export default UseReducer


import React, { useReducer } from 'react'

const ACTIONS={
    INCREMENT:"increment",
    DECREMENT:"decrement"
}

function reducerFn(state,action){
    switch(action.type){
        case "increment":
            return {count:state.count+1}
        case "decrement":
            return {count:state.count-1}
        default:
            return state
    }
}

const UseReducer = () => {
    const [state,dispatch] = useReducer(reducerFn,{count:1})

    const increment=(()=>{
        dispatch({type:ACTIONS.INCREMENT})
    })

    const decrement=(()=>{
        dispatch({type:ACTIONS.DECREMENT})
    })

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default UseReducer
