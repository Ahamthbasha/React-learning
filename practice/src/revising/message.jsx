import React, { Component } from 'react'

// class message extends Component {

//     constructor(){
//         super()

//         this.state={
//             message:"hi"
//         }
//     }

//     changeMessage=()=>{
//         this.setState({
//             message:"bye"
//         })
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//         <button onClick={this.changeMessage}>Click to change</button>
//       </div>
//     )
//   }
// }

// class Click extends Component{

//     clickHandle=() => {
//         console.log('button is clicked')
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick={this.clickHandle}>Click to see the message</button>
//             </div>
//         )
//     }
// }


// class ShowElement extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hi basha</h1>
//             </div>
//         )
//     }
// } 


//with props

// class ShowElement extends Component{
//     render(){
//         return (
//             <div>
//                 <h1>hi {this.props.name}</h1>
//             </div>
//         )
//     }
// }


//destructure props

// class ShowElement extends Component{
//     render(){
//         const {name} =this.props
//         return(
//             <div>
//                 <h1>Hi {name}</h1>
//             </div>
//         )
//     }
// }


//class counter

// class CounterApp extends Component{

//     constructor(props){
//         super(props)

//         this.state={
//             count:0
//         }
//     }

//     increment=() => {
//         this.setState((prevState)=>({
//             count:prevState.count+1
//         }))
//     }

//     decrement=()=>{
//         this.setState((prevState)=>({
//             count:prevState.count-1
//         }))
//     }

//     incrementFive=()=>{
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()
//     }

//     render(){
//         return(
//             <div>
//                 <h2>count-{this.state.count}</h2>
//                 <button onClick={this.incrementFive}>Increment</button>
//                 <button onClick={this.decrement}>Decrement</button>
//             </div>
//         )
//     }
// }


class EventBind extends Component{
    constructor(){
        super()

        this.state={
            message:"hi"
        }
    }

    clickChange=()=>{
        this.setState({
            message:"bye"
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickChange}>click</button>
            </div>
        )
    }
}


export default EventBind
