
import React,{Component} from 'react';
import './App.css';
import Greet from './component/greet'; //in greet.js export default use Greet inplace you can modify with any name but it works.

import Welcome  from './component/classComponent';
// import {Greet} from './component/greet'

import Hello from './component/hello';

import Message from './component/message';

import Counter from "./component/counter";

import FunctionClick from './component/functionClick';

import ClassClick from './component/classClick';

import EventBind from './component/eventBind';

import ParentComponent from './methodsAsProps/parentComponent';

class App extends Component{
  render() {
    return (
      <div className="App">
       {/* <Greet /> 
       <Welcome /> */}
       {/* <Hello /> */}


       {/* learning props */}
       {/* <Greet name="bruce" hero="vikram"/> */}
       {/* <Greet name="wayne" hero="vedha"/>
       <Greet name="batman" hero="yaaro"/> */}

       {/* props child */}

       {/* <Greet name="bruce" heroName="batman">
        <p>This is the children prop</p>
       </Greet>
       <Greet name="basha" heroName="manick basha">
        <button>Action</button>
       </Greet>
       <Greet /> */}

       {/* <Welcome name="basha" hero="manick basha"/> */}

       {/* state */}

       {/* <Message /> */}

       {/* counter */}

       {/* <Counter /> */}

       {/* <FunctionClick /> */}

     {/* <ClassClick /> */}

     {/* <EventBind /> */}

     <ParentComponent />

      </div>
    );
  }
}

export default App;