import React, { Component } from 'react'
import ChildComponent from './childComponent'

class parentComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            parentName:"parent"
        }

        this.greetParent=this.greetParent.bind(this)
    }

    // greetParent(){
    //     alert(`hello ${this.state.parentName}`)
    // }


    greetParent(childName){
        alert(`hello ${this.state.parentName} from ${childName}`)
    }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default parentComponent
