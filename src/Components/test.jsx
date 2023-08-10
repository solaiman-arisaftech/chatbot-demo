import React, { useEffect } from 'react'
import axios from 'axios'
const Test = () => {
    useEffect(() => {
        console.log("Started");    
        const func = async() => {
            console.log("Inside func");
            const res = await axios.get("http://5.189.160.223:8054/health")
            console.log(res);
        }
        func()
        console.log("end");
    })
  return (
    <div>
        <p>Hello</p>
    </div>
  )
}

export default Test
