// import React, { useState } from 'react'

// const FirstComponent = ({render}) => {
//     const [count,setCount] = useState(0)

//     const increment=()=>{
//         setCount((count)=>count+1)
//     }

//     return render(count,increment)
// }

// export default FirstComponent


import React,{useState} from 'react'

const FirstComponent = ({render}) => {

    const [count,setCount] = useState(0)

    const increment=() => {
        setCount((count)=>count+1)
    }
  return render(count,increment)
}

export default FirstComponent
