import React from "react";
import { useNavigate } from "react-router-dom";
const Home=() => {
const navigate=useNavigate()
// const history=useHistory()
const goToAbout=()=>{
    navigate('/about')
    // history.push('/about') it is older one which is replaced by navigate
}
    return(
        <div>
            <h1>Home</h1>
            <button onClick={goToAbout}>Go To About</button>
        </div>
    )
}

export default Home