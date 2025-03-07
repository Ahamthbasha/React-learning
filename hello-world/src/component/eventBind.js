import React, { Component } from 'react'

export class eventBind extends Component {

    constructor(props){
        super(props)

        this.state={
        message:"Hello"
        }

        this.clickHandler=this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:"good bye"
    //     })
    //     console.log(this)
    // }

    clickHandler=()=>{
        this.setState({
            messgae:"goodbye"
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/* first approach */}
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}

        {/* second approach */}

        {/* <button onClick={()=>this.clickHandler()}>click</button> */}

        {/* third approach */}
        {/* constructor */}

        {/* <button onClick={this.clickHandler}>click</button> */}

        {/* fourth approach */}

        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default eventBind
