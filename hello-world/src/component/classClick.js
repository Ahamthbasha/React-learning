import React, { Component } from 'react'

export class classClick extends Component {
    clickHandler(){
        console.log("button clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default classClick
