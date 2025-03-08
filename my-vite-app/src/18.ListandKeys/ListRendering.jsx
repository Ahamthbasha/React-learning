import React from 'react'
import Person from './Person'

// key props not accessible in child components.key prop is reserved.In Dom tree the value is inserted
const ListRenderingKeyAndProps = () => {
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
      const personList=persons.map(person => <Person key={person.id} person={person}/>)

      return <div>{personList}</div>
      }
      
      export default ListRenderingKeyAndProps
      