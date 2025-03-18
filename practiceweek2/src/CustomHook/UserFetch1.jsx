// import React from 'react'
// import UserFetch2 from './UserFetch2'

// const UserFetch1 = () => {
//     // Correctly calling the custom hook inside the component
//     const { data, load, error } = UserFetch2("https://jsonplaceholder.typicode.com/posts")

//     if (load) {
//         return <h3>Loading...</h3>
//     }

//     if (error) {
//         return <p>{error}</p>
//     }

//     if (!data) {
//         return <p>No data available</p>
//     }

//     return (
//         <div>
//             <ul>
//                 {
//                     data.map((val) => {
//                         return <li key={val.id}>{val.title}</li>
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

// export default UserFetch1


import React from 'react'
import UserFetch2 from './UserFetch2'

const UserFetch1 = () => {
    const {data,load,error} = UserFetch2("https://jsonplaceholder.typicode.com/posts")

    if(load){
        return <h3>Loading...</h3>
    }

    if(error){
        return <p>{error}</p>
    }
  return (
    <div>
      <ul>
        {
            data.map((val)=>(
                <li key={val.id}>{val.title}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default UserFetch1
