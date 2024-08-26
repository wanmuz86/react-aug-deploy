import React from 'react'
import { useState } from 'react'

const Counter = () => {

    // State - A variable within a component AND it is changeable
    // To retrieve the value (getter) = counter
    // To set the value (setter) = setCounter
    // 0 => Initial value

    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter+1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(0);

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <h3>Current Count: {counter}</h3>
        </div>
    )
}

export default Counter