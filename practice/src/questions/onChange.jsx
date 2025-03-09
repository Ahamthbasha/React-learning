import React,{useState} from "react";

const Input=() => {

    const [name,setName] =useState("")

    const handleInput=(e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleInput}/>
            <h1>Hello {name}</h1>
        </div>
    )

}

export default Input