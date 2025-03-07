import React from 'react'
import Person from './Person'
const ListRendering = () => {
    // const names=['bruce','clark','Diana']
//   return (
//     <div>
//       <h2>{names[0]}</h2>
//       <h2>{names[1]}</h2>
//       <h2>{names[2]}</h2>
//     </div>
//   )

// const names=['bruce','clark','Diana']
// const nameList=names.map(name => <h2>{name}</h2>)
// return(
//     <div>{nameList}</div>
// )

const persons=[
    { "id": 1, "name": "Bruce", "age": 30, "skill": "React" },
    { "id": 2, "name": "Alice", "age": 28, "skill": "JavaScript" },
    { "id": 3, "name": "John", "age": 35, "skill": "Node.js" },
    { "id": 4, "name": "Sarah", "age": 25, "skill": "Vue.js" },
    { "id": 5, "name": "James", "age": 40, "skill": "Angular" },
    { "id": 6, "name": "Emily", "age": 32, "skill": "React" },
    { "id": 7, "name": "Michael", "age": 27, "skill": "TypeScript" },
    { "id": 8, "name": "Rachel", "age": 33, "skill": "JavaScript" },
    { "id": 9, "name": "David", "age": 38, "skill": "CSS" },
    { "id": 10, "name": "Sophia", "age": 29, "skill": "HTML" }
  ]

  //second operation
  
//   const personList=persons.map(person=>(
//     <h2 key={person.id}>
//         I am {person.name}.My age is {person.age}.My skills are {person.skill}
//     </h2>
//   ))

//   return (
//     <div>{personList}</div>
//   )

//third approach

const personList=persons.map(person => <Person person={person}/>)

return <div>{personList}</div>
}

export default ListRendering
