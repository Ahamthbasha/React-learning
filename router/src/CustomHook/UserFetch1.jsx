import React from 'react'
import UserFetch2 from './UserFetch2'

const UserFetch1 = () => {

    const {data,load,error} = UserFetch2("https://jsonplaceholder.typicode.com/posts")

    if(load){
        return <h1>loading...</h1>
    }

    if(error){
        return <p>{error}</p>
    }
  return (
    <div>
      <ul>
        {
            data.map((val)=>{
                return <li key={val.id}>{val.title}</li>
            })
        }
      </ul>
    </div>
  )
}

export default UserFetch1
