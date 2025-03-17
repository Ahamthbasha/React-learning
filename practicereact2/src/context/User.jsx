// import React, { useContext } from 'react'
// import { themeContext } from './Context'

// const User = () => {

//     const {theme} = useContext(themeContext)

//     const textStyle={
//         backgroundColor:theme === "light" ?"dark":"green",
//         color:theme==="light" ? "dark" :"white"
//     }
//   return (
//     <div>
//       <h1 style={textStyle}>User</h1>
//     </div>
//   )
// }

// export default User


import React, { useContext } from 'react'
import { ThemeContext } from './Context'

const User = () => {
    const {theme} =useContext(ThemeContext)

    const themeStyle={
        backgroundColor:theme==="light"?"white":"black",
        color:theme==="light"?"black":"white"
    }
  return (
    <div >
      <h1 style={themeStyle}>User</h1>
    </div>
  )
}

export default User
