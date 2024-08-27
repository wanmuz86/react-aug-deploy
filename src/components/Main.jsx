import React from 'react'
import Counter from './Counter'
import UserInfo from './UserInfo';
import AddForm from './AddForm';

const Main = () => {
    // object
    const user = { id: 1, name: "John Doe", age: 25 };

    // Array of object
    const users = [{ id: 1, name: "John Doe", age: 25 }, { id: 2, name: "Alice", age: 16 },
    { id: 3, name: "Alex Smith", age: 32 }, { id: 4, name: "Jeniffer Doe", age: 30 }]

    return (
        <div>
            <h1 style={{ color: 'blue', fontSize: '40px' }}>Welcome to my app</h1>
            <p>I hope you enjoy it</p>
            <hr />
            <h2>Counter section</h2>
            <Counter initialValue={0} minValue={0} />
            <hr />
            <Counter initialValue={5} minValue={-99999} />
            <hr />
            <Counter initialValue={10} minValue={7} />

            <hr />
            <AddForm />
            <hr />
            <h2>User List</h2>
            <ul>
                {
                    users.map(val => <li key={val.id}><UserInfo user={val} /></li>)
                }
            </ul>
            <hr />
            <h2>User Information</h2>
            <UserInfo user={user} />
        </div>
    )
}

export default Main