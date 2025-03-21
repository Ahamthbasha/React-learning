// import React, { createContext } from 'react'
// import B from './B'

// export const createContextNew=createContext()
// const A = () => {
//     const name={
//         name:"ahamathbasha"
//     }
//   return (
//     <createContextNew.Provider value={name}>
//       <h1>A</h1>
//       <B />
//     </createContextNew.Provider>
//   )
// }

// export default A

// import React, { createContext } from 'react'
// import B from './B'

// export const createContextNew=createContext()

// const A = () => {
//   const count=1000
//   return (
//     <createContextNew.Provider value={count}>
//       <h1>A</h1>
//       <B />
//     </createContextNew.Provider>
//   )
// }

// export default A

import React, { createContext } from 'react'
import B from './B'

export const createContextNew=createContext()

const A = () => {
  const value=1000
  return (
    <createContextNew.Provider value={value}>
      <h1>A</h1>
      <B />
    </createContextNew.Provider>
  )
}

export default A
