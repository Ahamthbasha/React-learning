// import React from 'react'
// import { createContext,useState } from 'react'
// import Container from './Container'

// export const themeContext=createContext()

// const Context = () => {
//     const [theme,setTheme]=useState("light")

//     const toggleTheme=(()=>{
//         setTheme((curr)=>curr==='light'?"dark":"light")
//     })


//   return (
//     <themeContext.Provider value={{
//         theme
//     }}>
    
//     <button onClick={toggleTheme}>ToggleTheme</button>
//     <Container />
//     </themeContext.Provider>
//   )
// }

// export default Context


import React, { createContext, useState } from 'react'
import Container from './Container'

export const ThemeContext = createContext()

const Context = () => {
    const [theme,setTheme] = useState("light")

    const toggleTheme = (()=>{
     setTheme((curr)=>(curr==="light"?"dark":"light"))
    })

  return (
    <ThemeContext.Provider value={{
        theme
    }}>
      <h1>FirstComponent</h1>
      <button onClick={toggleTheme}>Click</button>
      <Container />
    </ThemeContext.Provider>
  )
}

export default Context
