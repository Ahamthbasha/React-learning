import React from 'react'
import Child from './Child'

const Parent = () => {
    const message="hello child"
  return (
    <div>
      <h1>Parent Component</h1>
      <Child message={message}/>
    </div>
  )
}

export default Parent
