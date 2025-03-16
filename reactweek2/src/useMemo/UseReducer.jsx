import React,{useReducer} from 'react'

const ACTIONS={
    INCREMENT:"increment",
    DECREMENT:"decrement"
}

function reducerFn(state,action){
    switch(action.type){
        case ACTIONS.INCREMENT:
            return {count:state.count+1}
        case ACTIONS.DECREMENT:
            return {count:state.count-1}
        default:
            return state
    }
}
const UseReducer = () => {
    const [state,dispatch] =useReducer(reducerFn,{count:0})
    // const [count,setCount] =useState(0)

    const increment=()=>{
        // setCount((curr)=>curr+1)
        dispatch({type:ACTIONS.INCREMENT})
    }

    const decrement=()=>{
    //     setCount((curr)=>curr-1)
        dispatch({type:ACTIONS.DECREMENT})
    }


  return (
    <div>
      <h1>count:{state.count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default UseReducer
