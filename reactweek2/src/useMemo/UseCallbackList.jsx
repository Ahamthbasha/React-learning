import React, { useEffect, useState } from 'react'

const UseCallbackList = ({getItems}) => {
    const [items,setItems] = useState([])

    useEffect(()=>{
        setItems(getItems(10))
    },[getItems])
  return (
    <div>
      {
        items.map((items,index)=>(
            <p key={index}>{items}</p>
        ))
      }
    </div>
  )
}

export default UseCallbackList
