import React, { useContext } from 'react'
import { createContextNew2 } from './A'



const D = () => {
    const value=useContext(createContextNew2)
  return (
    <div>
      <h4>D:{value}</h4>
    </div>
  )
}

export default D
