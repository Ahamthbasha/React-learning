import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './16.condtionalRendering/App.jsx'
import ListRendering from './17.ListRendering/ListRendering.jsx'
import ListRenderingKeyAndProps from './18.ListandKeys/ListRendering.jsx'
import ListRenderingAntiKey from './19.indexAsAntiKey/ListRendering.jsx'
import Stylesheet from './20.stylingAndCssbasic/Stylesheet.jsx'
import InlineStyle from './20.stylingAndCssbasic/inlineStyle.jsx'
import Form from './21.formHandling/form.jsx'
import LifeCycle from './23.Mounting/LifeCycle.jsx'
import LifeCycleUpdate from './24.updatingLifeCycle/LifeCycle.jsx'
import FragmentDemo from './25.Fragments/FragmentDemo.jsx'
import Table from "./25.Fragments/Tables.jsx"
import PureCompo from './26.pureComponent/PureCompo.jsx'
import ParentCompo from './26.pureComponent/ParentCompo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <ListRendering /> */}
    {/* <ListRenderingKeyAndProps /> */}
    {/* <ListRenderingAntiKey /> */}
    {/* <Stylesheet primary={false}/> */}
    {/* <InlineStyle /> */}
    {/* <Form /> */}
    {/* <LifeCycle /> */}
    {/* <LifeCycleUpdate /> */}
    {/* <FragmentDemo /> */}
    {/* <Table /> */}
    {/* <PureCompo /> */}
    <ParentCompo />
  </StrictMode>,
)
