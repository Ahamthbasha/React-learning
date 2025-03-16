import React,{useState} from "react"

const FunctionPractice3=(props) => {
    const [show,setShow]=useState(false)
    const {count} = props

    const ShowValue=()=>{
        setShow(true)
    }

    return(
        <div>
            <button onClick={ShowValue}>Show Value</button>
            {show && <h1>{count}</h1>}
        </div>
    )
}

export default FunctionPractice3