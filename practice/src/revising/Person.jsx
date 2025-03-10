import React from "react";

const Person=(props) =>{
    const {person} =props

    return(
        <div>
            <h2>My name is {person.name}.My age is {person.age}.My skills are {person.skill}</h2>
        </div>
    )
}

export default Person