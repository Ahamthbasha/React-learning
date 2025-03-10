import React, { useEffect, useState } from "react";

const Info=() => {
    const[load,setLoad]=useState(false)
    const[error,setError]=useState(null)
    const[user,setUser] = useState(null)
    const[userId,setUserId]=useState(1)


    const fetchUser=async(id) => {
        setLoad(true)
        setError(null)
        try{
            const res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

            const data=await res.json()

            setUser(data)
        }
        catch(error){
            setError(error)
        }
        finally{
            setLoad(false)
        }
    }

    useEffect(()=>{
        fetchUser(userId)
    },[userId])




    return(
        <div>
        <h1>{userId}</h1>
            {load && <p>Loading...</p>}
            {error && <p>Error...</p>}
            {user && (
                <div>
                    <h2>{user.name}</h2>
                    <h3>{user.email}</h3>
                </div>
            )}
            {
                <div>
                     <button 
                    onClick={() => setUserId((prev) => Math.max(1, prev - 1))}>
                    -
                </button>
                    <button onClick={() => setUserId((prev)=>prev+1)}>+</button>
                </div>
            }
        </div>
    )
}

export default Info

