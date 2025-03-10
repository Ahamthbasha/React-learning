import React,{useState} from "react";

import ChildComponent from "./ChildComponent";

const ParentComponent=() =>{

    const [childData,setChildData] = useState("")
    const handleData=(data) => {
        setChildData(data)
    }

    return(
        <div>
            <h1>Parent Component</h1>
            <ChildComponent onReceivedData={handleData}/>
            <h2>child data:{childData}</h2>
        </div>
    )
}

export default ParentComponent