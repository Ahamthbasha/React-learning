import React, { createContext,useState } from 'react'
import B from './B'


export const createContextNew2=createContext()
const A = () => {
    const [name,setName] = useState("king")
  return (
    <createContextNew2.Provider value={name}>
      <h1>A</h1>
      <B />
    </createContextNew2.Provider>
  )
}

export default A
