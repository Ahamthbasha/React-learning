// import React, { lazy, Suspense } from 'react'

// //import

// const LazyComponet=lazy(()=>import("./ReactLazy1"))

// const ReactLazy2 = () => {

//   return (
//     <div>
//       <h1>Lazy example</h1>
//       <Suspense fallback={<h3>Loading...</h3>}>
//         <LazyComponet/>
//       </Suspense>
//     </div>
//   )
// }

// export default ReactLazy2


import React, { lazy, Suspense } from 'react'

const LazyComponent=lazy(()=>import("./ReactLazy1"))

const ReactLazy2 = () => {
  return (
    <div>
      <h1>React Lazy example</h1>
      <Suspense fallback={<h3>Loading...</h3>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}

export default ReactLazy2
