// import React from 'react'
// import UserFetch2 from './UserFetch2'

// const UserFetch1 = () => {

//     const {data,load,error} = UserFetch2("https://jsonplaceholder.typicode.com/posts")

//     if(load){
//         return <h3>Loading</h3>
//     }

//     if(error){
//         return <h3>{error}</h3>
//     }
//   return (
//     <div>
//       <ul>
//         {
//             data.map((val)=>{
//                 return <li key={val.id}>{val.title}</li>
//             })
//         }
//       </ul>
//     </div>
//   )
// }

// export default UserFetch1

// import React from 'react'
// import UserFetch2 from './UserFetch2'

// const UserFetch1 = () => {
//   const {data,load,error} = UserFetch2("https://jsonplaceholder.typicode.com/posts")


//   if(load){
//     return <h1>load...</h1>
//   }

//   if(error){
//     return <h1>{error}</h1>
//   }

//   return (
//     <div>
//       <ul>
//         {
//           data.map((val)=>{
//             return <li key={val.id}>{val.title}</li>
//           })
//         }
//       </ul>
//     </div>
//   )
// }

// export default UserFetch1


import React from 'react'
import UserFetch2 from './UserFetch2'

const UserFetch1 = () => {
  const {data,load,err} = UserFetch2("https://jsonplaceholder.typicode.com/posts")

  if(load){
    return <p>loading....</p>
  }

  if(err){
    return <p>{err}</p>
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
