import React from 'react'

// function FunctionPractice() {
//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   )
// }

// const FunctionPractice = (props) => {
//     return(
//         <h1>hello {props.name}</h1>
//     )
// }

//parameter destructuring

// const FunctionPractice = (props) => {
//     const {name} =props
//     return (
//         <div>
//             <h1>Hello {name}</h1>
//         </div>
//     )
// }

//props with children

// const FunctionPractice= (props) => {
//     const {name,children} = props
//     return(
//         <div>
//             <h1>hello {name}</h1>
//             {children}
//         </div>
//     )
// }



const FunctionPractice=()=>{
    return(
        React.createElement('div',
            {id:"hello",className:"basha"},
            React.createElement('h1',null,"hello viswas")
        )
    )
}

export default FunctionPractice
