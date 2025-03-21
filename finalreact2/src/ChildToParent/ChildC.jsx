// import React, { useEffect } from 'react'

// const ChildC = ({fn}) => {

//     useEffect(()=>{
//         fn("hello parent")
//     },[fn])
    
//   return (
//     <div>
//       <h1>Child component</h1>
//     </div>
//   )
// }

// export default ChildC


import React, { useEffect } from 'react'

const ChildC = ({fn}) => {

    const handleClick=()=>{
        fn("hello parent")
    }
  return (
    <div>
      <h1>child component</h1>
      <button onClick={handleClick}>Show</button>
    </div>
  )
}

export default ChildC
