import React, { useState, useEffect } from "react";

// const UseCallbackList = ({ getItems }) => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     if (typeof getItems !== "function") {
//       console.error("getItems is not a function:", getItems);
//       return;
//     }
//     setItems(getItems(10));
//   }, [getItems]);

//   return (
//     <div>
//       {items.map((val, index) => (
//         <p key={index}>{val}</p>
//       ))}
//     </div>
//   );
// };

// const UseCallbackList=({pass})=>{

//     const [items,setItems] = useState([])

//     useEffect(()=>{
//         if(typeof pass!= 'function'){
//             console.log("error")
//             return
//         }
//         setItems(pass(10))
//     },[pass])

//     return(
//         <div>
//             {
//                 items.map((val,index)=>{
//                    return <p key={index}>{val}</p>
//                 })
//             }
//         </div>
//     )
// }

// const UseCallbackList=({pass})=>{
//     const [items,setItems] = useState([])

//     useEffect(()=>{
//         // if(typeof pass !== 'function'){
//         //     return
//         // }
//         setItems(pass(10))
//     },[pass])
//     return(
//         <div>
//             {
//                 items.map((val,index)=>{
//                     return <p key={index}>{val}</p>
//                 })
//             }
//         </div>
//     )
// }

const UseCallbackList=({pass})=>{
    const [items,setItems] = useState([])

    useEffect(()=>{
        if(typeof pass !== 'function'){
            return
        }
        setItems(pass(10))
    },[pass])

    return(
        <div>
            {
                items.map((val,index)=>{
                    return <p key={index}>{val}</p>
                })
            }
        </div>
    )
}

export default UseCallbackList;
