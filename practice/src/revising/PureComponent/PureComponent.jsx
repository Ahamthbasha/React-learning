import React,{PureComponent} from "react";

class PureComponentEx extends PureComponent{

    render(){
        console.log("pure component render")
        return(
            <div>

                <h1>PureComponents{this.props.name}</h1>
            </div>
        )
    }
}

export default PureComponentEx