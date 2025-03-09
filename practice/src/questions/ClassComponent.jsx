import React, { Component } from 'react'

class ClassComponent extends Component {

    constructor (props){
        super(props)

        this.state={
            count:0
        }
    }

    componentDidMount(){
        console.log("component mount")
    }

    componentDidUpdate(){
        console.log("component update")
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>click</button>
      </div>
    )
  }
}

export default ClassComponent
