// import React, { lazy, Suspense } from 'react'

// const LazyComponent=lazy(()=>import ('./LazyComponent'))
// const Componet = () => {
//   return (
//     <div>
//       <Suspense fallback={<h3>Loading...</h3>}>
//       <LazyComponent />
//       </Suspense>
//     </div>
//   )
// }

// export default Componet

import React, { lazy,Suspense } from 'react'

const LazyComponent=lazy(()=>import ('./LazyComponent'))
const Componet = () => {
  return (
    <div>
      <Suspense fallback={<h3>Loading...</h3>}>
      <LazyComponent />
      </Suspense>
    </div>
  )
}

export default Componet


