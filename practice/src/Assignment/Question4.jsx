import React,{useState,useRef} from "react";

const InputForm =() => {
    const[name,setName] =useState("")

    const inputRef=useRef(null)

    const handleOutput=(e) => {
        e.preventDefault()

        if(!name.trim()){
            console.log("input is empty")

            inputRef.current.focus()
            return
        }

        console.log("name is",name)
        setName("")
    }
    return(
        <div>
            <form onSubmit={handleOutput}>

            <label>Enter your name</label>
            <input type="text" ref={inputRef} value={name} onChange={(e)=>setName(e.target.value)}/>
            <button type="submit">submit</button>

            </form>
        </div>
    )
}

export default InputForm