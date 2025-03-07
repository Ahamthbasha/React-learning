import React, { Component } from 'react'

class userGreeting extends Component {

    constructor(props){
        super(props)
        
        this.state={
            isLoggedIn:false
        }
    }

  render() {


    //first approach

    // if(this.state.isLoggedIn){
    //     return(
    //         <div>Welcome Vishwas</div>
    //     )
    // }
    // else{
    //     return(
    //         <div>Welcome Guest</div>
    //     )
    // }
    // return (
    //   <div><div>Welcome Vishwas</div>
    //   <div>welcome Guest</div></div>
    // )

    //second approach:element variable

    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome Vishwas</div>
    // }else{
    //     message=<div>Welcome Guest</div>
    // }

    // return (
    //     <div>{message}</div>
    // )

    //third approach : ternary

    // return(
    //     this.state.isLoggedIn?<div>Welcome Vishwas</div>:<div>Welcome Guest</div>
    // )

    //fourth approach:short circuit approach

    return this.state.isLoggedIn && <div>Welcome Vishwas</div>
  }
}

export default userGreeting
