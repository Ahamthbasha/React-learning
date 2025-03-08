import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleUpdate extends Component {

    constructor(props){
        super(props)

        this.state={
            name:"vishwas"
        }
        console.log("lifeCycle constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle GetDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log("LifeCycle componentDidMount")
    }

    shouldComponentUpdate(){
      console.log("LifeCycle shouldComponentUpdate")
      return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("LifeCycle getsnapshorBeforeUpdate")
      return null
    }

    componentDidUpdate(){
      console.log("LifeCycle componentDidUpdate")
    }

    changeState=()=>{
      this.setState({
        name:"codeEvolution"
      })
    }

render() {
    console.log("LifeCycle render")
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>changeState</button>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleUpdate


/*

without child
life cycle constructor
life cycle getDerivedStateFromProps
life cycle render
life cycle componentDidMount

with child

life cycle constructor
life cycle getDerivedStateFromProps
life cycle render

life cycleB constructor
life cycleB getDerivedStateFromProps
life cycleB render

life cycleB componentDidMount
life cycle componentDidMount
*/


