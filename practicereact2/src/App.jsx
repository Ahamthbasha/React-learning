import React from 'react'


import UseCallback from '../src/Components/UseCallback'
// import UseMemo from './Components/UseMemo'
// import ReactMemo from './Components/ReactMemo'
import Context from './context/Context'
import UseReducer from './Components/UseReducer'
import ReactLazy2 from './Components/ReactLazy2'
import UseFetch2 from './customHook/UseFetch2'
const App = () => {
  return (
    <div>
      {/* <UseCallback /> */}
      {/* <UseMemo /> */}
      {/* <ReactMemo /> */}
      {/* <Context /> */}

      {/* <UseReducer /> */}
      {/* <ReactLazy2 /> */}

      <UseFetch2/>
    </div>
  )
}

export default App
