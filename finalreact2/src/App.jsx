import React from 'react'
import UseMemo from './Component/UseMemo/UseMemo'
import UseCallback from './Component/UseCallback'
import ReactMemo from './Component/ReactMemo'
import UseReducer from './Component/UseReducer'
import A from './Context/A'
import Lazy from './lazy/Lazy'
import UserFetch1 from './CustomHook/UserFetch1'
import StopWatch from './StopWatch/StopWatch'
import RenderComponent from './RenderProps/RenderComponent'
import UseRef from './UseRef'
import Parent from './parentToChild/Parent'
import ParentC from './ChildToParent/ParentC'

const App = () => {
  return (
    <div>
      {/* <UseMemo /> */}
      <UseCallback />
      {/* <ReactMemo /> */}
      {/* <UseReducer /> */}

      {/* <A /> */}

      {/* <Lazy /> */}

      {/* <UserFetch1 /> */}

      {/* <StopWatch /> */}

      {/* <h1>Counter App</h1>
      <RenderComponent /> */}

      {/* <Parent /> */}

      {/* <ParentC /> */}

      {/* <UseRef /> */}
    </div>
  )
}

export default App
