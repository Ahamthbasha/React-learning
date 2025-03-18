import React,{useEffect, useState} from 'react'

const UserFetch2 = (url) => {

    const [data,setData] = useState(null)
    const [load,setLoad] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        const fetchData=async ()=>{
            try {
                const response=await fetch(url)
                const data=await response.json()
                setData(data)
            } catch (error) {
                setError(error)
            }
            finally{
                setLoad(false)
            }
        }
        fetchData()
    },[])
  return{data,load,error}
}

export default UserFetch2