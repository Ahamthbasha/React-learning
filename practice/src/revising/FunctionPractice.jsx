import React,{useState,useEffect,useRef} from 'react'
import FunctionPractice2 from './FunctionPractice2'
import FunctionPractice3 from './FunctionPractice3'
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

// const Fragement=() => {
// const names=["Bruce", "Clark", "Diana"]
//   return(
//     <>
//     {
//       names.map((name)=>(
//         <li>{name}</li>
//       ))
//     }
//     </>
//   )

// }


// const CountSimple=() => {
//   const [count,setCount] =useState(0)

//   return(
//     <div>
//       <h1>count-{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Click</button>
//     </div>
//   )
// }

//PrevCount

// const CountSimple=() => {
//   const[count,setCount] =useState(0)

//   const increment5=() => {
//     setCount(prevCount =>prevCount +5)
//   }

//   return(
//     <div>
//       <h1>count-{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <button onClick={()=>setCount(count-1)}>Decrement</button>
//       <button onClick={increment5}>Increment5</button>
//     </div>
//   )
// }

//...rest parameter use case

// const InputType=() => {
//   const [name,setName] = useState({firstName:"",lastName:""})

//   const firstName=(e) =>{
//     setName({
//       ...name,
//       firstName:e.target.value
//     })
//   }

//   return(
//     <div>
//       <input type="text" value={name.firstName} onChange={firstName} />
//       <h1>{name.firstName}</h1>
//     </div>
//   )
// }

// const InputType=() => {

//   const [no,setNo]=useState([])

//   const addItem=() => {
//     setNo(
//       [
//         ...no,
//         {
//           id:no.length,
//           value:Math.floor(Math.random() *10) +1
//         }
//       ]
//     )
//   }

//   return(
//     <div>
//       <button onClick={addItem}>AddItem</button>
//       <ul>
//         {
//           no.map((n)=>(
//             <li key={n.id}>{n.value}</li>
//           ))
//         }
//       </ul>
//     </div>
//   )

// }

//life cycle

// const InputType=() => {
//   const[count,setCount] = useState(0)

//   useEffect(()=>{
//     document.tilte=`you have clicked ${count} times`
//   })
  

//   return(
//     <div>
//       <h1>count-{count}</h1>
//       <button onClick={()=>{setCount(count+1)}}>Increment</button>
//     </div>
//   )
// }


//input type

// const InputType=() => {
//   const[name,setName] = useState('')

//   const handleInput=(e) => {
//     setName(e.target.value)
//   }
//   return(
//     <div>
//       <input type="text" value={name} onChange={handleInput}/>
//       <h1>{name}</h1>
//     </div>
//   )
// }


// const InputType=() =>{
//   const [name,setName]=useState("")
//   const [display,setDisplay]=useState(false)
//   const handleInput=(e)=>{
//     setName(e.target.value)
//   }

//   const showMessage=() =>{
//     setDisplay(true)
//   }

//   return(
//     <div>
//       <input type="text" value={name} onChange={handleInput} />
//       <button onClick={showMessage}>click to see in page</button>

//       {display && <h1>{name}</h1>}
//     </div>
//   )
// }

// const InputType=() => {
//   const[post,setPost] = useState([])
// useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res)=>res.json())
//   .then((data)=>setPost(data))
//   .catch((error)=>console.log(error))
// },[])

// return(
//   <div>
//     <ul>
//       {
//         post.map((p)=>(
//           <li key={p.id}>{p.title}</li>
//         ))
//       }
//     </ul>
//   </div>
// )
// }

// const InputType = () => {

//   const [post,setPost] = useState({})
//   const [id,setId] = useState(1)

//   useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then((res)=>res.json())
//     .then((data)=>setPost(data))
//     .catch((error)=>console.log(error))
//   },[id])

//   const settingId=(e) => {
//     setId(e.target.value)
//   }
//   return(
//     <div>
//       <input type="text" value={id} onChange={settingId} />
//       <div>{post.title}</div>
//     </div>
//   )
// }

// const InputType= () => {
//   const [post,setPost] = useState({})
//   const [id,setId] = useState(1)
//   const [buttonId,setButtonId] = useState(1)

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
//     .then((res)=>res.json())
//     .then((data)=>setPost(data))
//     .catch((error)=>console.log(error))
//   },[buttonId])

//   const handleInput=(e) => {
//     setId(e.target.value)
//   }

//   const buttonId=() =



//   return(
//     <div>
//       <input type="text" value={id} onChange={handleInput} />
//       <button onClick={}>Click</button>
//       <div>{post.title}</div>
//     </div>
//   )

// }


// const InputType=() => {

//   const[posts,setPost]=useState({})
//   const[id,setId]=useState(1)
//   const[buttonId,setButtonId]=useState(1)

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
//     .then((res)=>res.json())
//     .then((data)=>setPost(data))
//     .catch((error)=>console.log(error))
//   },[buttonId])

//   const handleInput=(e) => {
//     setId(e.target.value)
//   }

//   const handleButton=() => {
//     setButtonId(id)
//   }

//   return(
//     <div>
//       <input type="text" value={id} onChange={handleInput} />
//       <button onClick={handleButton}>Click to display</button>
//       <div>{posts.title}</div>
//     </div>
//   )
// }

// const InputType=()=>{
//   const data=[
//     {id:1,name:"Ahamathbasha",email:"basha@gmail.com"},
//     {id:2,name:"shahrukhan",email:"srk@gmail.com"}
// ]

// return(
//   <div>
//     {
//       data.map((d)=>(
//         <div style={{
//           border:'1px solid black',
//           textAlign:'center',
//           backgroundColor:'blue',
//           marginLeft:'150px',
//           marginTop:'10px'
//         }}>
//           <h1>{d.name}</h1>
//           <h2>{d.email}</h2>
//         </div>
//       ))
//     }
//   </div>
// )
// }


// const InputType=() => {
//   const[count,setCount] = useState(0)

//   const increment=()=>{
//     setCount(count+1)
//   }

//   const decrement=() =>{
//     setCount(count-1)
//   }

//   return(
//     <div>
//       <h1>count:{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   )
// }

// const InputType=() => {

//   const[count,setCount]=useState(1)
//   const[user,setUser]=useState({})

//   useEffect(()=>{

//     fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
//     .then((res)=>res.json())
//     .then((data)=>setUser(data))
//   },[count])

//   const increment=() => {
//     setCount(count+1)
//   }

//   const decrement=() => {
//     setCount(count-1)
//   }

//   return(
//     <div>
//       <h1>{count}-{user.name}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   )

// }

// const InputType=() => {

//   const [input,setInput] = useState('')
//   const [message,setMessage] =useState(false)

//   const handleInput=(e)=>{
//     setInput(e.target.value)
//   }

//   const modifyMessage=()=>{
//     setMessage(true)

//     setTimeout(()=>{
//       setMessage(false)
//     },2000)
//   }

//   return(
//     <div>
//       <input type="text" value={input} onChange={handleInput} />
//       <button onClick={modifyMessage}>submit</button>
//       {message && <h1>{input}</h1>}
//     </div>
//   )
// }

// const InputType=() => {
//   const[count,setCount] = useState(0)

//   const increment=()=>{
//     setCount(count+1)
//   }

//   const decrement=() => {
//     setCount(count-1)
//   }
//   return(
//     <div>
//       <h1>count-{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   )
// }

// const InputType=() => {
//   const[input,setInput]=useState('')
//   const[show,setShow]=useState(false)

//   const handleInput=(e) => {
//     setInput(e.target.value)
//   }

//   const showing=()=>{
//     setShow(true)

//     setInterval(()=>{
//       setShow(false)
//     },2000)
//   }
//   return(
//     <div>
//       <input type="text" value={input} onChange={handleInput} />

//       <button onClick={showing}>submit</button>
//       {show && <h1>{input}</h1>}
//     </div>
//   )
// }

// const InputType=() => {
//  const message ="basha bai"

//   return(
//     <div>
//       <h1>Parent component</h1>
//       <ChildComponent message={message}/>
//     </div>
//   )
// }

// const InputType=() => {
//   const[data,setData]=useState('')

//   const handleInput=(data)=>{
//     setData(data)
//   }

//   return(
//     <div>
//       <h1>Parent component:{data}</h1>
//       <ChildComponent onSendData={handleInput}/>
//     </div>
//   )
// }

// const InputType= () => {
//   // State to hold the input value
//   const [inputValue, setInputValue] = useState('');
  
//   // useRef to reference the input DOM element
//   const inputRef = useRef(null);
  
//   // useRef to store the previous value of the inputValue
//   const prevInputValue = useRef('');

//   // Effect to focus the input field on mount
//   useEffect(() => {
//     inputRef.current.focus(); // Focus the input field when component mounts
//   }, []);

//   // Effect to track the previous input value
//   useEffect(() => {
//     prevInputValue.current = inputValue; // Update the previous value after each render
//   }, [inputValue]);

//   // Handle input change
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <div>
//       <h1>useRef Example</h1>

//       {/* Displaying the current and previous input values */}
//       <p>Current Input: {inputValue}</p>
//       <p>Previous Input: {prevInputValue.current}</p>

//       {/* Input field with useRef hook attached for focusing */}
//       <input 
//         ref={inputRef} 
//         type="text" 
//         value={inputValue} 
//         onChange={handleInputChange} 
//       />

//       <button onClick={() => alert('Current input value: ' + inputValue)}>
//         Show Input Value
//       </button>
//     </div>
//   );
// };

// const InputType=() => {
//   const[value,setValue] =useState('')

//   const inputRef=useRef(null)

//   const prevRef=useRef('')

//   const handleInput=(e) =>{
//     setValue(e.target.value)
//   }

//   useEffect(()=>{
//     prevRef.current=value
//   },[value])

//   const focusInput = () => {
//     inputRef.current.focus(); // Using useRef to focus the input field
//   };

//   return(
//     <div>
//       <h1>currentInput:{value}</h1>
//       <h2>prevInput:{prevRef.current}</h2>

//       <input type="text" ref={inputRef} value={value} onChange={handleInput}/>
//       <button onClick={focusInput}>Focus Input</button>

//     </div>
//   )
// }

// const InputType=() => {
//   const message="hello child"

//   return(
//     <div>
//       <h1>Parent</h1>
//       <FunctionPractice2 message={message}/>
//     </div>
//   )
// }

// const InputType=() => {
//   const [data,setData]=useState('')

//   const settingData=(data)=>{
//     setData(data)
//   }

//   return(
//     <div>
//       <h1>ParentComponent:{data}</h1>
//       <FunctionPractice2 onReceiveData={settingData}/>
//     </div>
//   )
// }

// const InputType=() => {
//   const [input,setInput]=useState('')

//   const handleInput=(e)=>{
//     setInput(e.target.value)
//   }

//   return(
//     <div>
//       <input type="text" value={input} onChange={handleInput} />
//       <h1>{input}</h1>
//     </div>
//   )
// }


// const InputType=() =>{

//   const [input,setInput] =useState('')
//   const [show,setShow] =useState(false)

//   const handleInput=(e)=>{
//     setInput(e.target.value)
//   }

//   const showable=()=>{
//     setShow(true)

//     setInterval(()=>{
//       setShow(false)
//     },2000)
//   }


//   return(
//     <div>
//       <input type="text" value={input} onChange={handleInput}/>
//       <button onClick={showable}>submit</button>
//       {show && <h1>{input}</h1>}
//     </div>
//   )
// }



// const InputType=()=>{
//   const[count,setCount] =useState(0)

//   const increment=()=>{
//     setCount(count+1)
//   }

//   const decrement=()=>{
//     setCount(count-1)
//   }

//   return(
//     <div>
//       <h1>count-{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   )
// }


// const InputType=()=>{
//   const [data,setData] =useState('')

//   const inputRef=useRef(null)

//   const handleInput=(e) => {
//     setData(e.target.value)
//   }

//   const focus=()=>{
//     inputRef.current.focus()
//   }

//   return(
//     <div>
//       <input type="text" ref={inputRef} value={data} onChange={handleInput}/>
//       <button onClick={focus}>Click to focus</button>
//       <h1>{data}</h1>
//     </div>
//   )
// }

// const InputType=()=>{
//   const name=["abcd","apple","orange","guava","philiphiness"]

//   return(
//     <div>
//       <ul>

//         {name.map((n,index)=>(
//           <li key={index}>{n}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// const InputType= ()=> {

//   const list=["abcd","apple","orange","guava","philiphiness"]

//   const[search,setSearch]=useState("")

//   const handleInput=(e) => {
//     setSearch(e.target.value)
//   }

//   const filterList=list.filter((li)=>(
//     li.toLowerCase().includes(search.toLowerCase())
//   ))

//   return(
//     <div>

//       <input type="text" value={search} onChange={handleInput} />
      
//       <ul>
//         {
//           filterList.map((fl,index)=>(
//             <li key={index}>{fl}</li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }


// const InputType=() => {

//   const [data,setData] =useState('')

//   const sendChild=(data) =>{

//     setData(data)

//   }

//   return(
//     <div>
//       <h1>ParentComponent:{data}</h1>
//       <FunctionPractice2 onReceiveData={sendChild}/>
//     </div>
//   )

// }


// const InputType=() =>{
//   const initialValue=0
//   const[count,setCount]=useState(initialValue)

//   const increment=()=>{
//     setCount(count+1)
//   }

//   const decrement=()=>{
//     setCount(count-1)
//   }

//   const reset=()=>{
//     setCount(initialValue)
//   }

//   return(
//     <div>
//       <h1>count:{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }


// const InputType=() => {

//   const [data,setData] = useState('')

//   const handleInput=(e) => {
//     setData(e.target.value)
//   }


//   return(
//     <div>
//       <h1>{data}</h1>
//       <input type="text" value={data} onChange={handleInput}/>
//     </div>
//   )
// }


// const InputType=() => {

//   const [data,setData] = useState("")
//   const inputRef=useRef(null)

//   const handleInput=(e) => {
//     setData(e.target.value)
//   }

//   const focus=() => {
//     <h1>{inputRef.current.value}</h1>
//   }
//   return(
//     <div>
//       <input type="text" ref={inputRef} value={data} onChange={handleInput}/>
//       <button onClick={focus}>click to see the input message</button>
//     </div>
//   )
// }

// const InputType=()=>{
//   const[data,setData] =useState('')
//   const inputRef=useRef(null)

//   const handleInput=(e) => {
//     setData(e.target.value)
//   }

//   const GoToInput=() => {
//     inputRef.current.focus()
//   }
//   return(
//     <div>
//       <input type="text" ref={inputRef} value={data} onChange={handleInput} />
//       <button onClick={GoToInput}>Click</button>
//     </div>
//   )
// }

// const InputType=() => {
//   const data=["basha","srk","amir","salman"]
//   const [searchItem,setSearchItem] = useState("")
//   const filterData=data.filter((n)=>(
//     n.toLowerCase().includes(searchItem.toLowerCase())
//   ))

//   const handleInput=(e) => {
//     setSearchItem(e.target.value)
//   }

//   return(
//     <div>
//       <input type="text" value={searchItem} onChange={handleInput} />
//       <ul>
//         {
//           filterData.map((d)=>(
//             <li key={d}>{d}</li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

// const InputType=(props) => {
  
//   return(
//     <div>
//       {
//         props.data.map((pro)=>(
//           <>
//           <h1>{pro.name}</h1>
//           <h2>{pro.email}</h2>
//           </>
//         ))
//       }
//     </div>
//   )
// }

// const InputType=(props) => {
//   return(
//     <div>
//       {props.data.map((pro)=>(
//         <li>{pro}</li>
//       ))}
//     </div>
//   )
// }

// const InputType=(props) =>{
//   const {name} =props
//   return(
//     <div>
//       <h1>{name}</h1>
//     </div>
//   )
// }

// const InputType=()=>{
//   const[count,setCount] = useState(0)
//   const[user,setUser] = useState({})

//   useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
//     .then((res)=>res.json())
//     .then((data)=>setUser(data))
//     .catch((error)=>console.log(error))
//   },[count])

//   const increment=()=>{
//     setCount(count+1)
//   }

//   const decrement=()=>{
//     setCount(count-1)
//   }

//   return(
//     <>
//     <h1>count:{count}</h1>
//     <h1>{user.name}</h1>
//     <button onClick={increment}>Increment</button>
//     <button onClick={decrement}>Decrement</button>
    
//     </>
//   )
// }

// const InputType=() => {
//   const [show,setShow]=useState(false)

//   const inputRef=useRef(null)


//   const showOrNot=()=>{
//     setShow(true)
//   }

//   return(
//     <div>
//       <input type="text" ref={inputRef} />

//       <button onClick={showOrNot}>show input message</button>

//       {show && <h1>{inputRef.current.value}</h1>}
//     </div>
//   )
// }

// const InputType=() => {
//   const message="abcd"

//   return(
//     <div>
//       <h1>parent message</h1>
//       <FunctionPractice2 message={message}/>

//     </div>
//   )
// }

// const InputType=() => {
//   const [data,setData]=useState('')

//   const receiveData=(data)=>{
//     setData(data)
//   }

//   return(
//     <div>
//       <h1>Parent  component</h1>
//       <h2>child message:{data}</h2>
//       <FunctionPractice2 oreceiveData={receiveData}/>
//     </div>
//   )
// }

const InputType=() => {

  const initialState=0

  const [count,setCount] =useState(initialState)

  useEffect(()=>{
    console.log("component mount and update")

    return()=>{
      console.log("component unmount")
    }
  },[count])

  const increment=()=>{
    setCount(count+1)
  }


  return(

    <div>
      <h1>count:{count}</h1>
      <button onClick={increment}>Increment</button>
      <FunctionPractice2 count={count}/>
      <FunctionPractice3 count={count}/>
    </div>
  )


}


//increment,decrement,showValue

export default InputType
