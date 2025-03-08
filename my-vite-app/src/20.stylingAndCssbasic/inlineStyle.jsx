import React from 'react'

function inlineStyle() {
    const heading={
        fontSize:'72px',
        color:'blue'
    }
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default inlineStyle

// 1.create object for styling
// 2.inside object camelCase
// 3. pass that object inside the style