// import React, { useContext } from 'react'
// import { createContextNew } from './A'

// const D = () => {
//     const name= useContext(createContextNew)
//   return (
//     <div>
//       <h4>D.Name is {name.name}</h4>
//     </div>
//   )
// }

// export default D


// import React, { useContext } from 'react'
// import { createContextNew } from './A'


// const D = () => {
//   const value=useContext(createContextNew)
//   return (
//     <div>
//       <h1>D:{value}</h1>
//     </div>
//   )
// }

// export default D


import React, { useContext } from 'react'
import { createContextNew } from './A'

const D = () => {
  const useValue=useContext(createContextNew)

  return (
    <div>
      <h4>D:{useValue}</h4>
    </div>
  )
}

export default D
