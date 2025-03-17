import React, { useState, useCallback } from "react";
import UseCallbackList from "./UseCallbackList"; // Ensure correct import

// const UseCallback = () => {
//   const [number, setNumber] = useState(0);

//   const getItems = useCallback(
//     (incrementor) => {
//       return [
//         number + incrementor + 1,
//         number + incrementor + 2,
//         number + incrementor + 3,
//       ];
//     },
//     [number]
//   );

//   return (
//     <div>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       />
//       <UseCallbackList getItems={getItems} />
//     </div>
//   );
// };

// const UseCallback=() => {

//     const [no,setNo] =useState(0)
//     const [theme,setTheme] = useState(false)

//     const getItems=useCallback((incrementor)=>{
//         return [no+incrementor+1,no+incrementor+2,no+incrementor+3]
//     },[no])

//     const themeStyle={
//         backgroundColor:theme?"black":"white",
//         color:theme?"white":"black"
//     }

//     return(
//         <div style={themeStyle}>
//             <input type="number" value={no} onChange={(e)=>setNo(parseInt(e.target.value))} />

//             <button onClick={()=>setTheme((curr)=>!curr)}>ToggleTheme</button>

//             <UseCallbackList pass={getItems}/>
//         </div>
//     )
// }


// const UseCallback=()=>{
//     const [no,setNo] = useState(0)
//     const [theme,setTheme] = useState(false)

//     const getItems=useCallback((incrementor)=>{
//         return [no+incrementor+1,no+incrementor+2,no+incrementor+3]
//     },[no])

//     const themeStyle={
//         backgroundColor:theme?"black":"white",
//         color:theme?"white":"black"
//     }

//     return(
//         <div style={themeStyle}>
//             <input type="number" value={no} onChange={(e)=>setNo(parseInt(e.target.value))|| 0} />

//             <button onClick={()=>setTheme((pre)=>!pre)}>ToggleTheme</button>

//             <UseCallbackList pass={getItems}/>
//         </div>
//     )
// }

const UseCallback=() => {
    const [no,setNo] = useState(0)
    const [theme,setTheme]=useState(false)

    const themeStyle={
        backgroundColor:theme?"black":"white",
        color:theme?"white":"black"
    }

    const getItems=useCallback((incrementor)=>{
        return [no+incrementor+1,no+incrementor+2,no+incrementor+3]
    },[no])

    return(
        <div style={themeStyle}>
            <input type="number" value={no} onChange={(e)=>setNo(parseInt(e.target.value))||0} />

            <button onClick={()=>setTheme((prev)=>!prev)}>Toggle</button>

            <UseCallbackList pass={getItems}/>
        </div>
    )
}

export default UseCallback;
