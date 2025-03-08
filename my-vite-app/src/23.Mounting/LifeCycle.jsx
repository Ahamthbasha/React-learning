import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycle extends Component {

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

//   render() {
//     console.log("LifeCycleA render")
//     return (
//       <div>
//         LifeCycle A
//       </div>
//     )
//   }

render() {
    console.log("LifeCycle render")
    return (
      <div>
        <div>LifeCycleA</div>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycle


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


