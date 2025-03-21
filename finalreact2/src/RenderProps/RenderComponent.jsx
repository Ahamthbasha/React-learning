// import React from 'react'

// import FirstComponent from './FirstComponent'

// const RenderComponent = () => {
//   return (
//     <FirstComponent
//     render={(count,increment)=>(
//         <div>

//             <h1>{count}</h1>
//             <button onClick={increment}>Increment</button>
//         </div>
//     )}
//     />
//   )
// }

// export default RenderComponent


import React from 'react'
import FirstComponent from './FirstComponent'

const RenderComponent = () => {
  return (
    <FirstComponent 
    
    render={(count,increment)=>(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )}

    />
  )
}

export default RenderComponent
