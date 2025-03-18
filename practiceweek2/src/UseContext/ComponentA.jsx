import React, { createContext,useState } from 'react'
import ComponentB from './ComponentB'

export const createContextNew=createContext()

const ComponentA = () => {
    const [name,setName] = useState("basha")
  return (
    <createContextNew.Provider value={name}>
        <h1>Component A</h1>
      <ComponentB />
    </createContextNew.Provider>
  )
}

export default ComponentA
