import React, { Component } from 'react'
import RegCompo from './RegCompo'
import PureCompo from './PureCompo'
export class ParentCompo extends Component {
    constructor(props){
        super(props)

        this.state={
            name:"Vishwas"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Vishwas"
            })
        },2000)
    }
  render() {
    console.log(`**** Parent Component render ****`)
    return (
      <div>
        Parent Component
        <RegCompo name={this.state.name}/>
        <PureCompo name={this.state.name}/>
      </div>
    )
  }
}

export default ParentCompo


/*

parent
reg
pure component will be only one time callable


*/