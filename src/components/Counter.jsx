import React from 'react'
import { useState } from 'react'

const Counter = () => {

    // State - A variable within a component AND it is changeable
    // To retrieve the value (getter) = counter
    // To set the value (setter) = setCounter
    // 0 => Initial value

    const [counter, setCounter] = useState(0);
    // Create a variable 
    // getter = message
    // setter = setMessage
    // initial value = ""
    const [message, setMessage] = useState("");

    const increment = () => {
        setMessage("");
        setCounter(counter + 1);
    }

    const decrement = () => {
        if (counter == 0) {
            setMessage("Number cannot be less than 0")
        } else {
            setCounter(counter - 1)
        }
    };
    const reset = () => {
        setMessage("");
        setCounter(0);
    }

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <p style={{ color: 'red' }}>{message}</p>
            <h3>Current Count: {counter}</h3>
        </div>
    )
}

export default Counter