// import React, { lazy, Suspense } from 'react'

// const LazyComponent=lazy(()=>import ("./LazyComponent"))

// const Lazy = () => {
//   return (
//     <div>
//       <Suspense fallback={<h3>Loading...</h3>}>
//         <LazyComponent/>
//       </Suspense>
//     </div>
//   )
// }

// export default Lazy


// import React, { lazy,Suspense } from 'react'

// const LazyComponent=lazy(()=>import ("./LazyComponent"))
// const Lazy = () => {
//   return (
//       <Suspense fallback={<h3>Loading...</h3>}>
//         <LazyComponent />
//       </Suspense>
//   )
// }

// export default Lazy


import React, { lazy, Suspense } from 'react'

const LazyComponent=lazy(()=> import ("./LazyComponent"))
const Lazy = () => {
  return (
    <Suspense fallback={<h3>Product content Loading.....</h3>}>
      <LazyComponent/>
    </Suspense>
  )
}

export default Lazy
