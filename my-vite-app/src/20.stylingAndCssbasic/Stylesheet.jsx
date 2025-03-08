import React from 'react'
import  './myStyle.css'
function Stylesheet(props) {
    let className=props.primary ? 'primary' : ""
  return (
    <div>
      {/* <h1 className={className}>Ahamathbasha</h1> */}
      <h1 className={`${className} font-xl`}>Ahamathbasha</h1>
    </div>
  )
}

export default Stylesheet

// 1.className
// 2.main.jsx stylesheet primary={false}
// 3.props parameter
// 4.Ternary operator
// 5.pass className
// 6.use template literal for multiple styling