import React from 'react'
import { useState } from 'react'

// Object destructuring props = {"initialValue":number, "minValue":number}
// const {initialValue, minValue} = props

const Counter = ({initialValue, minValue}) => {

    // State - A variable within a component AND it is changeable
    // To retrieve the value (getter) = counter
    // To set the value (setter) = setCounter
    // 0 => Initial value

    const [counter, setCounter] = useState(initialValue);
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
        // In JS, you have == which means value comparison "0" == 0 (true)
        // === strict equality   "0" === 0 (false)
        if (counter === minValue) {
            setMessage(`Number cannot be less than ${minValue}`)
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