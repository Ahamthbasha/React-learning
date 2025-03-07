import React from "react";

// function Greet(){
//     return <h1>Hello world</h1>
// }


// export const Greet=()=> <h1>Hello basha</h1>

//props

// const Greet=props =>{
//     console.log(props)
//     return <h1>Hello {props.name} also known as {props.hero}</h1>
// }


// props with children
// const Greet=props=>{
//     return(
//         <div>
//             <h1>Hello {props.name} also known as {props.hero}</h1>
//             {props.children}
//         </div>
//     )
// }

// parameter props destructuring

// const Greet=({name,hero})=>{
//     return(
//         <div>
//             <h1>
//                hello {name} a.k.a {hero}
//             </h1>
//         </div>
//     )
// }

//props destructuring

const Greet=props=>{
    const {name,hero}=props
    return(
        <div>
            <h1> hello {name} and {hero} </h1>
        </div>
    )
}

export default Greet