import React, { Component } from 'react'
import ReactMemo from './ReactMemo/ReactMemo'
import UseCallback from './UseCallback/UseCallback'
import UseMemo from './UseMemo/UseMemo'
import UseReducer from './UseReducer/UseReducer'
import ComponentA from './UseContext/ComponentA'
import Componet from './ReactLazy/Componet'
import UserFetch1 from './CustomHook/UserFetch1'

const App = () => {
  return (
    <div>
      {/* <ReactMemo /> */}

      {/* <UseCallback /> */}

      {/* <UseMemo /> */}

      {/* <UseReducer /> */}

      {/* <ComponentA /> */}

      {/* <Componet/> */}

      <UserFetch1 />
    </div>
  )
}

export default App
