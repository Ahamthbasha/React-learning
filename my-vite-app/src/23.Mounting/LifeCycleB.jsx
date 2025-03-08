import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props){
        super(props)

        this.state={
            name:"vishwas"
        }
        console.log("lifeCycleB constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB GetDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log("LifeCycleB componentDidMount")
    }

  render() {
    console.log("LifeCycleB render")
    return (
      <div>
        LifeCycle B
      </div>
    )
  }
}

export default LifeCycleB
