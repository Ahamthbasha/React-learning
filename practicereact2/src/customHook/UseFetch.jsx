import React,{useState,useEffect} from 'react'

const UseFetch = (url) => {

    const [data,setData] = useState(null)
    const [load,setLoad] = useState(true)
    const [error,setErr] = useState(null)

    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response=await fetch(url)
                const data=await response.json()
                setData(data)
            } catch (error) {
                setErr(error)
            }
            finally{
                setLoad(false)
            }
        }
        fetchData()
    },[url])

  return {data,load,error}
}

export default UseFetch

