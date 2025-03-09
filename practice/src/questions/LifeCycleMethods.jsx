import React, { Component } from 'react'

// class LifeCycleMethods extends Component {
//     constructor(props){
//         super(props)

//         this.state={
//             message:"hello"
//         }

//         console.log("constructor initializing")
//     }

//     componentDidMount(){
//         console.log("runs only once after it.Component Did mount")
//     }

//   render() {
//     return (
//       <div>
//         console.log("Render-ui")
//         <h1>{this.state.message}</h1>
//       </div>
//     )
//   }
// }


//updateMount

// class LifeCycleMethods extends Component{

//     constructor(props){
//         super(props)

//         this.state={
//             count:0
//         }

//     }

//     componentDidUpdate(prevProps,prevState){
//         console.log(`componentDidUpdate previous count ${prevState.count}`)
//     }

//     increment=()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.increment}>click</button>
//             </div>
//         )
//     }
// }

//removal

// class LifeCycleMethods extends Component {
//   // ✅ Declare `setTimer` as a class property
//   setTimer = null;

//   componentDidMount() {
//     this.setTimer = setInterval(() => {
//       console.log("Timer is running");
//     }, 1000);
//   }

//   componentWillUnmount() {
//     if (this.setTimer) {
//       clearInterval(this.setTimer); // ✅ Clear interval correctly
//       console.log("Component is unmounting");
//     }
//   }

//   render() {
//     return <h1>Timer is running</h1>;
//   }
// }



export default LifeCycleMethods
