import React from 'react'
import Counter from './Counter'

const Main = () => {
    return (
        <div>
            <h1 style={{color:'blue',fontSize:'40px'}}>Welcome to my app</h1>
            <p>I hope you enjoy it</p>
            <hr />
            <h2>Counter section</h2>
            <Counter initialValue={0} minValue={0}/>
            <hr />
            <Counter initialValue={5} minValue={-99999}/>
            <hr />
            <Counter initialValue={10} minValue={7}/>
            <hr />
        </div>
    )
}

export default Main