import { useState } from 'react'
import React, { createContext } from 'react'
import Container from '../Components/Container'

export const ThemeContext=createContext()

const UseContext = () => {
    const [theme,setTheme] = useState("light")

    const toggleTheme=() => {
        setTheme((curr) => (curr === "light" ? "dark" :"light"))
    }
  return (
    <ThemeContext.Provider value={{
        theme
    }}> 
        <button onClick={toggleTheme}>ToggleTheme</button>
        <h1>First component</h1>
        <Container />
    </ThemeContext.Provider >
  )
}

export default UseContext
