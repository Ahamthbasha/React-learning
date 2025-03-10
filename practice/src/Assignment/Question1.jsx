import React from "react";

const card=() => {
    const data=[
        {id:1,name:"Ahamathbasha",email:"basha@gmail.com"},
        {id:2,name:"shahrukhan",email:"srk@gmail.com"}
    ]

    return (
        <div>
            {
                data.map((data)=>(
                    <div style={{
                        border:"1px solid black",
                        padding:"10px",
                        margin:'10PX',
                        textAlign:"center",
                        backgroundColor:"blueviolet"
                    }}>
                        <h1>{data.name}</h1>
                        <p>Email:{data.email}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default card