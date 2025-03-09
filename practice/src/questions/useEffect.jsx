import React, { useEffect, useState } from "react";

const FetchUseEffect=()=>{
    const[posts,setPost] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>setPost(data.slice(0,5)))
    },[])

    return(
        <div>
            <ul>
            {
                posts.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default FetchUseEffect