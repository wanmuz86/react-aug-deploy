import React from 'react'

const UserInfo = ({ user }) => {
    const {id, name, age} = user;
    return (
        <div>
            <p>User Id: {id}</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default UserInfo