import React from 'react'
import axios from 'axios'

const GetComponent = () => {
    const getData = () => {
        axios.get("https://dummyjson.com/products/1")
        .then(response=>{
            console.log(response.data)
        })
        .catch(err=>{
            console.log(err)
        })

    }
    return (
        <div>
            <button onClick={getData}>Get data</button>
        </div>
    )
}

export default GetComponent