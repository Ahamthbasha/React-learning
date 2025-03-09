import React from 'react'

// function Greeting({name ='GUEST'}) {
//     const currentTime=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',hour12:true})
//   return (
//     // <div style={{
//     //     border: "1px solid black",
//     //     padding: "10px",
//     //     borderRadius: "8px",
//     //     width: "200px",
//     //     textAlign: "center",
//     //     margin: "10px auto"
//     //   }}>
//     //   {/* <h1>Hello {props.name}</h1> */}

//     //   {/* <h1>Hello my name is {props.name} and my favourite color is {props.color}</h1> */}

//     //   <p>Name:{props.name}</p>
//     //   <p>Age:{props.age}</p>
//     //   <p>Country:{props.country}</p>
//     // </div>

//     // <div>
//     //     <button>{props.label}</button>
//     // </div>


//     // <div>
//     //     <h1>Welcome,{name}</h1>
//     // </div>
//     <div>
//     <h1>Hello {name}! The current time is {currentTime} </h1>
//     </div>
//   )
// }

//arrow function

// const Greeting=()=>{
//     return (
//         <div>hi</div>
//     )
// }

//map

// const names = ["Alice", "Bob", "Charlie"];

// const NameList=()=>{
//     return (
//         <ul>

//            {names.map((name)=>(
//                 <li>{name}</li>
//             ))} 
//         </ul>
//     )
// }

//destructuring

// const NameList=({name})=>{
//     return(
//         <h1>{name}</h1>
//     )
// }

//filter

// const students = [
//     { id: 1, name: "Alice", score: 80 },
//     { id: 2, name: "Bob", score: 45 },
//     { id: 3, name: "Charlie", score: 70 },
//     { id: 4, name: "David", score: 30 },
//   ];

// const pass=students.filter((student)=>{
//     if(student.score >=50){
//         return student
//     }
// })

// const PassedStudents=()=>{
//     return(
//         <ul>

//             {pass.map((std)=>(
//                 <li>{std.name}-{std.score}</li>
//             ))}
//         </ul>
//     )
// }

//reduce

const cartItems = [
    { id: 1, name: "Apple", price: 30 },
    { id: 2, name: "Banana", price: 20 },
    { id: 3, name: "Orange", price: 50 },
  ];

const reduce=cartItems.reduce((acc,curr)=>{
    return acc+curr.price
},0)
  const totalProduct=()=>{
    return(
        <div>
            <ul>
                {cartItems.map((cart)=>(
                    <li key={cart.id}>{cart.name}-{cart.price}</li>
                ))}
            </ul>
            <h3>Total Price is ${reduce}</h3>
        </div>
    )
  }

export default totalProduct
