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

    shouldComponentUpdate(){
      console.log("LifeCycleB shouldComponentUpdate")
      return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("LifeCycleB getsnapshorBeforeUpdate")
      return null
    }

    componentDidUpdate(){
      console.log("LifeCycleB componentDidUpdate")
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


/*

LifeCycle GetDerivedStateFromProps
LifeCycle shouldComponentUpdate
LifeCycle render
LifeCycleB GetDerivedStateFromProps
LifeCycleB shouldComponentUpdate
LifeCycleB render
LifeCycle getsnapshorBeforeUpdate
LifeCycleB componentDidUpdate
LifeCycle componentDidUpdate





*/