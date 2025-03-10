import React from 'react'

//dont use index as a key 

const ListRenderingAntiKey = () => {
  const names=["Bruce","Clark","Diana"]
      const nameList=names.map((name,index)=><h2 key={index}>{name}</h2>)
      return <div>{nameList}</div>
      }
      
export default ListRenderingAntiKey
      