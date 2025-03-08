import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import ClassCounter from './2.HOOKS/classCounter.jsx'
import HooksCounter from './2.useState(counter)/HooksCounter.jsx'
import HookCounterTwo from './3.useStatePrevState/HookCounterTwo.jsx'
import HookCounterThree from './4.useStateObj/HookCounterThree.jsx'
// import HookCounter5 from './5.useStateArr/HookCounter5.jsx'
// import ClassCounterOne from './6.useEffect/classCounterOne.js'
// import HookCounter from './6.useEffect/HookCounter.jsx'
// import ClassCounter from './7.conditionallyRunEffect/classCounter.jsx'
import HookCounterCondition from "./7.conditionallyRunEffect/HookCounterCondition.jsx"
import ClassMouse from './8.RunEffectsOnce/ClassMouse.jsx'
import HookMouse from './8.RunEffectsOnce/HookMouse.jsx'
import MouseContainer from './10.useEffectWithCleanup/MouseContainer.jsx'
import IntervalClassCounter from "./11.useEffectIncorrect/IntervalClassCounter.jsx"
import IntervalHook from './11.useEffectIncorrect/IntervalHook.jsx'
import DataFetching from './12.FetchingData/DataFetching.jsx'

import DataFetching2 from './13.DataFetching/DataFetching2.jsx'
import DataFetching3 from './13.DataFetching/DataFetching3.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ClassCounter /> */}
    {/* <HooksCounter /> */}
    {/* <HookCounterTwo/> */}
    {/* <HookCounterThree /> */}
    {/* <HookCounter5 /> */}
    {/* <ClassCounterOne /> */}
    {/* <HookCounter /> */}
    {/* <ClassCounter /> */}
    {/* <HookCounterCondition /> */}
    {/* <ClassMouse /> */}
    {/* <MouseContainer /> */}
    {/* <IntervalClassCounter /> */}
    {/* <IntervalHook /> */}

    {/* <DataFetching /> */}
    {/* <DataFetching2 /> */}

    <DataFetching3 />
  </StrictMode>,
)
