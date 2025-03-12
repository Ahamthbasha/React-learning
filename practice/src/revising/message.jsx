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


// class EventBind extends Component{
//     constructor(){
//         super()

//         this.state={
//             message:"hi"
//         }
//     }

//     clickChange=()=>{
//         this.setState({
//             message:"bye"
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <button onClick={this.clickChange}>click</button>
//             </div>
//         )
//     }
// }


// class ConditionalRendering extends Component{
//     constructor(){
//         super()

//         this.state={
//             isLoggedIn:true
//         }
//     }


    // render(){
    //     if(this.state.isLoggedIn){
    //         return(
    //             <h1>welcome basha</h1>
    //         )
    //     }else{
    //         return(
    //             <h1>Welcome Guest</h1>
    //         )
    //     }
        
    // }

    // render(){
    //     return(
    //         this.state.isLoggedIn ? <h1>WelcomeBasha</h1> :  <h1>Welcome Guest</h1>
    //     )
    // }

    // render(){
    //     return(
    //         this.state.isLoggedIn && <div>Welcome basha</div>
    //     )
    // }

//     class Form extends Component {

//         constructor(props){
//             super(props)
    
//             this.state={
//                 userName:'',
//                 comments:'',
//                 topic:'react'
//             }
//         }
    
//         handleUserNameChange=(event)=>{
//             this.setState({
//                 userName:event.target.value
//             })
//         }
    
//         handleComments=((event)=>{
//             this.setState({
//                 comments:event.target.value
//             })
//         })
    
//         handleTopicChange=((event)=>{
//             this.setState({
//                 topic:event.target.value
//             })
//         })
    
//         handleSubmit=((event)=>{
//             alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
//             event.preventDefault()
//         })
    
//       render() {
//         const {userName,comments,topic}=this.state
//         return (
//           <form onSubmit={this.handleSubmit}>
//             <div>
//                 <label>UserName</label>
//                 <input type='text' value={userName} onChange={this.handleUserNameChange}/>
//             </div>
    
//             <div>
//                 <label>Comments</label>
//                 <textarea value={comments} onChange={this.handleComments}></textarea>
//             </div>
    
//             <div>
//                 <label>Topic</label>
//                 <select value={topic} onChange={this.handleTopicChange}>
//                     <option value="react">React</option>
//                     <option value="angular">Angular</option>
//                     <option value="vue">Vue</option>
//                 </select>
//             </div>
//             <button>submit</button>
//           </form>
//         )
//       }

// }


// class Form extends Component{
//     constructor(props){
//         super(props)

//         this.state={
//             userName:'',
//             comments:'',
//             topic:'react'
//         }
//     }

//     handleName=(e) => {
//         this.setState({
//             userName:e.target.value
//         })
//     }

//     handleComments=(e) => {
//         this.setState({
//             comments:e.target.value
//         })
//     }

//     handleTopic=(e) => {
//         this.setState({
//             topic:e.target.value
//         })
//     }

//     handleOutput=(e) => {
//         alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
//     }

//      render(){
//         const {userName,comments,topic} =this.state
//         return(
//             <form onSubmit={this.handleOutput}>

//                 <div>
//                     <label>UserName</label>
//                     <input type="text" value={userName} onChange={this.handleName} />
//                 </div>

//                 <div>
//                     <label>comments</label>
//                     <textarea type="text" value={comments} onChange={this.handleComments}></textarea>
//                 </div>


//                 <div>
//                     <label>Topic</label>
//                     <select value={topic} onChange={this.handleTopic}>
//                         <option value="react">React</option>
//                         <option value="angular">Angular</option>
//                         <option value="vue">Vue</option>
//                     </select>
//                 </div>

//                 <button>Submit</button>


//             </form>
//         )
//     }
// }

// class LifeCycle extends Component{
//     constructor(props){
//         super(props)

//         this.state={
//             message:"nothing"
//         }

//         console.log("constructor")
//     }

//     static getDerivedProps(){
//         console.log("derived and props")
//         null
//     }

//     componentDidMount(){
//         console.log("component did mount")
//     }

//     render(){
//         console.log("render")
//         return(
//             <div>
//                 <h1>Hello world</h1>
//             </div>
//         )
//     }
// }

// class LifeCycle extends Component{
//     constructor(props){
//         super(props)

//         this.state={
//             name:"vishwas"
//         }
        
//         console.log("component constructor")
//     }

//     componentDidMount(){
//         console.log("component did mount")
//     }

//     componentDidUpdate(){
//         console.log("component update")
//     }

//     componentWillUnmount(){
//         console.log("component will unmount")
//     }

// changeName=()=>{
//     this.setState({
//         name:"ahamathbasha"
//     })
// }

//     render(){
//         console.log("component render")
//         return(
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <button onClick={this.changeName}>click</button>
//             </div>
//         )
//     }
// }


// class NormalComponent extends Component{
//     render(){
//         const {name} =this.props
//         console.log("render")
//         return(
            
//             <h1>{name}</h1>
//         )
//     }
// }

// class CounterSimple extends Component{
//     constructor(){
//         super()

//         this.state={
//             count:0
//         }
//     }

//     increment=() => {
//         this.setState({
//             count:this.state.count+1
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Count-{this.state.count}</h1>
//                 <button onClick={this.increment}>click</button>
//             </div>
//         )
//     }
// }

// class CounterSimple extends Component{
//     constructor(){
//         super()
//         this.state={
//             count:0
//         }
//     }

//     componentDidMount(){
//         document.title=`you clicked ${this.state.count}`
//     }

//     componentDidUpdate(prevState,prevCount){
//         document.title=`you clicked ${this.state.count}`
//     }

//     render(){
//         return(
//             <div>
//                 <h1>count-{this.state.count}</h1>
//                 <button onClick={() => this.setState({count:this.state.count+1})}>increment</button>
//             </div>
//         )
//     }
// }

// class CounterSimple extends Component{

//     constructor(){
//         super()

//         this.state={
//             name:'',
//             showMessage:false
//         }
//     }

//     componentDidMount(){
//         console.log("component mounted")
//     }

//     componentDidUpdate(prevState,prevProps){
//         if(prevState.name != this.state.name){
//             console.log("component updated")
//         }
//     }

//     inputShow=(e) => {
//         this.setState({
//             name:e.target.value
//         })
//     }

//     showName=()=>{
//         this.setState({
//             showMessage:true
//         })
//     }

//     render(){
//         return(
            // <div>
            //     <input type="text" value={this.state.name} onChange={this.inputShow} />
            //     <h1>{this.state.name}</h1>
            // </div>

//             <div>
//                 <input type="text" value={this.state.name} onChange={this.inputShow}/>
//                 <button onClick={this.showName}>Click to see the message</button>
//                 {this.state.showMessage && <h1>{this.state.name}</h1>}
//             </div>
//         )
//     }

// }

// class CounterSimple extends Component{
//     constructor(){
//         super()

//         this.state={
//             count:0
//         }
//     }

//     increment=()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }

//     decrement=() => {
//         this.setState({
//             count:this.state.count-1
//         })
//     }
    
//     render(){
//         return(
//             <div>
//                 <h1>Count-{this.state.count}</h1>
//                 <button onClick={this.increment}>Increment</button>
//                 <button onClick={this.decrement}>Decrement</button>
//             </div>
//         )
//     }
// }

// class CounterSimple extends Component{
//     constructor(){
//         super()

//         this.state={
//             count:0
//         }
//     }

//     increment=()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }

//     decrement=() => {
//         this.setState({
//             count:this.state.count-1
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.increment}>Increment</button>
//                 <button onClick={this.decrement}>Decrement</button>
//             </div>
//         )
//     }
// }

// class CounterSimple extends Component{
//     constructor(){
//         super()

//         this.state={
//             count:0
//         }
//     }

//     componentDidMount(){
//         console.log("component mounted")
//     }

//     componentDidUpdate(){
//         console.log("component update")
//     }

//     componentWillUnmount(){
//         console.log("component is unMounted")
//     }

//     increment=()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }

//     decrement=() =>{
//         this.setState({
//             count:this.state.count-1
//         })
//     }

//     render(){
//         return(
//             <div>
//               <h1>{this.state.count}</h1>
//               <button onClick={this.increment}>Increment</button>
//               <button onClick={this.decrement}>Decrement</button>
//             </div>
//         )
//     }
// }

// class CounterSimple extends Component {
//     constructor() {
//       super();
//       this.state = {
//         count: 0
//       };
//       this.timerId = null; // Declare timerId to store interval reference
//     }
  
//     componentDidMount() {
//       console.log("Component mounted");
//       this.timerId = setInterval(() => {
//         this.setState((prevState) => ({
//           count: prevState.count + 1
//         }));
//       }, 1000); // Increment count every second
//     }
  
//     componentDidUpdate() {
//       console.log("Component updated", this.state.count);
//     }
  
//     componentWillUnmount() {
//       console.log("Component is unmounted");
//       clearInterval(this.timerId); // Clearing the interval when component unmounts
//     }
  
//     render() {
//       return (
//         <div>
//           <h1>Timer: {this.state.count} sec</h1>
//         </div>
//       );
//     }
//   }
  


export default CounterSimple
