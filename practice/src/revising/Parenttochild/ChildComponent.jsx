import React from "react";

const ChildComponent =(props) => {
    const {message} =props

    return(
        <h1>child showing message:{message}</h1>
    )
}

export default ChildComponent