import React,{lazy, Suspense} from 'react'
const LazyComponent=lazy(()=> import ("./LazyComponent"))

const Show = () => {

  return (
    <div>
        <Suspense fallback={<h3>wait...</h3>}>
        <LazyComponent />
        </Suspense>
    </div>
  )
}

export default Show
