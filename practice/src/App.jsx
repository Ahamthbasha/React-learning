import React from "react";

// import Greeting from "./questions/Greeting";
// import TotalProduct from "./questions/Greeting";
import ClassComponent from "./questions/ClassComponent"
import FunctionComponentCounter from "./questions/functionComponentCounter";
import Greeting from "./questions/DynamicRendering";
// import LifeCycleMethods from "./questions/LifeCycleMethods";
import LifeCycleFuncitonCounter from "./questions/LifeCycleMethodFunction"
import CounterUseState from "./questions/useState"
import FetchUseEffect from "./questions/useEffect"
import InputFocus from "./questions/useRef";
import StoreUseRef from "./questions/useRef"
import NoRenderRef from "./questions/useRef";
// import About from "./questions/UseHistoryNav";
import ClickEvent from "./questions/OnClick";
import Input from "./questions/onChange";
import Home from "./ReactRouter/Home";
import Card from "./Assignment/Question1"
import Count from "./Assignment/Question2";
import Info from "./Assignment/Question3";
import InputForm from "./Assignment/Question4";

const App=() =>{
  return (
    <div>
      {/* <Greeting name="basha" color="green"/> */}
      {/* <Greeting name="basha" age={28} country="USA"/> */}
      {/* <Greeting label="Click Me"/> */}

      {/* <Greeting name="John"/>
      <Greeting /> */}

      {/* <Greeting name="basha"/> */}

      {/* <NameList name="basha"/> */}

      {/* <TotalProduct /> */}

      {/* <ClassComponent /> */}

      {/* <FunctionComponentCounter /> */}


{/* dynamic rendering */}
      
      {/* <Greeting /> */}

{/* life cycle methods in class */}

{/* <LifeCycleMethods /> */}

{/* Life cycle methods in function */}

{/* <LifeCycleFuncitonCounter /> */}

{/* <CounterUseState /> */}

{/* <FetchUseEffect /> */}

{/* <InputFocus/> */}

{/* <StoreUseRef /> */}

{/* <NoRenderRef /> */}

{/* <About /> */}

{/* <ClickEvent /> */}
{/* <Input/> */}

{/* <Home /> */}


{/* assignment */}

{/* <Card /> */}

{/* <Count /> */}

{/* <Info /> */}

<InputForm />
    </div>
  )
}

export default App