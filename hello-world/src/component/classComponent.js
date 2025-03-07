import React,{Component} from 'react';

// class welcome extends Component{
//     render(){
//         return <h1>basha</h1>
//     }
// }

//class component props

// class welcome extends Component{
//     render(){
//         return <h1>Hello {this.props.name} a.k.a {this.props.heroName}</h1>
//     }
// }

//props destructuring

class welcome extends Component{
    render(){
        const {name,hero} = this.props
        return <h1>hello my name is {name} and hero name is {hero}</h1>
    }
}

export default welcome