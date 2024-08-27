import React, { useState } from 'react'
import axios from 'axios'

const GetComponent = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getData = () => {
        setLoading(true)
        setError(null)
        setData(null)
        axios.get("https://dummyjson.com/products/1")
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(err => {
                console.log(err)
                setError('An error has occured')
                
            })
            .finally(()=>{
                setLoading(false)
            })
        
    }
    return (
        <div>
            {loading && <p>Loading....</p>}
            {error && <p>{error}</p>}
            {data && 
            <div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <p>USD {data.price}</p>
                <img src={data.images[0]} alt={data.title} width={300} />
            </div>
            }
            <button onClick={getData}>Get data</button>
        </div>
    )
}

export default GetComponent