import React from "react";

import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"

const App =() => {

    <Router>
        <nav>
            <link to="/">Home</link>
            <link to="/about">About</link>
            <link to="/contact">Contact</link>
        </nav>

        <Routes>
            <Route Path="/" element={<Home/>}/>
            <Route Path="/" element={<About/>}/>
            <Route Path="/" element={<Contact/>}/>
        </Routes>
    </Router>
}

export default App