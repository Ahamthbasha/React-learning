import React, { Component } from "react";

class NormalComponent extends Component{
    render(){
        console.log("normal component")
        return(
            <div>
                <h1>NormalComponent-{this.props.name}</h1>
            </div>
        )
    }
}

export default NormalComponent