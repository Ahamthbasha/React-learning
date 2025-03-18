import React, { useContext } from 'react'
import { createContextNew } from './ComponentA'


const ComponentD = () => {
    const useValue=useContext(createContextNew)
  return (
    <div>
      <h4>Component D:{useValue}</h4>
    </div>
  )
}

export default ComponentD
