import React,{useContext} from 'react'
import { ThemeContext } from '../useMemo/UseContext'

const User = () => {
    const {theme}=useContext(ThemeContext)

    const textStyle={
        backgroundColor:theme === "light" ? "white" :"black",
        color:theme === "light" ? "black" :"white"
    }
  return (
    <div>
      <h1 style={textStyle}>user</h1>
    </div>
  )
}

export default User
