import React from 'react'
import UseFetch from './UseFetch'
const UseFetch2 = () => {
    const {data,load,error} = UseFetch("https://jsonplaceholder.typicode.com/posts")

    if(load){
        return <h1>loading...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }
  return (
    <div>

        <ul>
            {data.slice(0,5).map((val)=>(
                <li key={val.id}>{val.title}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default UseFetch2
