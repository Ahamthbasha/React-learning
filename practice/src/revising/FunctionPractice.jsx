import React from 'react'
// import Person from './Person';

// import MyStyle from './myStyle.css'
function FunctionPractice() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

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



// const FunctionPractice=()=>{
//     return(
//         React.createElement('div',
//             {id:"hello",className:"basha"},
//             React.createElement('h1',null,"hello viswas")
//         )
//     )
// }

//list rendering

// const FunctionPractice=() => {
//     const names=['basha','srk','king'];

        // return(
        //     <ul>
        //         {names.map((name,index)=>(
        //             <li key={index}>{name}</li>
        //         ))}
        //     </ul>
        // )

//         const nameList=names.map((name) => <h2>{name}</h2>)
//         return(
//             <div>{nameList}</div>
//         )

// const persons=[
//     { "id": 1, "name": "Bruce", "age": 30, "skill": "React" },
//     { "id": 2, "name": "Alice", "age": 28, "skill": "JavaScript" },
//     { "id": 3, "name": "John", "age": 35, "skill": "Node.js" },
//     { "id": 4, "name": "Sarah", "age": 25, "skill": "Vue.js" },
//     { "id": 5, "name": "James", "age": 40, "skill": "Angular" },
//     { "id": 6, "name": "Emily", "age": 32, "skill": "React" },
//     { "id": 7, "name": "Michael", "age": 27, "skill": "TypeScript" },
//     { "id": 8, "name": "Rachel", "age": 33, "skill": "JavaScript" },
//     { "id": 9, "name": "David", "age": 38, "skill": "CSS" },
//     { "id": 10, "name": "Sophia", "age": 29, "skill": "HTML" }
//   ]

//   return(
//     <div>
//         <ul>
//         {persons.map((person)=>(
//             <li>I am {person.name}.My age is {person.age}.My skills are {person.skill}</li>
//         ))}
//         </ul>
//     </div>
//   )

// const FunctionPractice=persons.map((person)=> <Person key={person.id} person={person}/>)
// return(
//     <div>
//         {FunctionPractice}
//     </div>
// )
// }

// const ListRenderinAndKeys=()=>{
//     const names=["Bruce","Clark","Diana"]
//     const nameList=names.map((name,index)=>(
//         <h2 key={index}>{name}</h2>
//     ))
//     return(
//         <div>{nameList}</div>
//     )
// }

// const InlineStyle=()=>{
//     const header={
//         backgroundColor:'red'
//     }

//     return(
//         <div>
//             <h1 style={header}>hello</h1>
//         </div>
//     )
// }

// const StyleSheet=(props)=>{

//     let className=props.primary ? 'primary' : ""

//     return(
//         <div>
//             <h1 className={`${className}`}>hello world</h1>
//         </div>
//     )
// }

//fragment

const Fragement=() => {
const names=["Bruce", "Clark", "Diana"]
  return(
    <>
    {
      names.map((name)=>(
        <li>{name}</li>
      ))
    }
    </>
  )

}


export default Fragement
