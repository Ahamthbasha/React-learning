import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import About from '../src/components/About'
import ReactMemo from './components/ReactMemo';
import A from './context/A';
import Show from './lazy/Show';
import UserFetch1 from './CustomHook/UserFetch1';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </Router>

    // <ReactMemo />
    // <A />

    // <Show />

    <UserFetch1 />
  );
}

export default App;
