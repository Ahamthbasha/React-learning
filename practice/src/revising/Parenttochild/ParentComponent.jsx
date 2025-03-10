import React from "react";

import ChildComponent from "./ChildComponent";

const ParentComponent= () => {
    const message="vanakam chennai"

    return(
        <div>
            <h1>message</h1>
            <ChildComponent message={message}/>
        </div>
    )
}

export default ParentComponent