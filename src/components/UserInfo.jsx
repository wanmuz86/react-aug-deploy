import React from 'react'

const UserInfo = ({ user }) => {
    const {id, name, age} = user;
    return (
        <div>
            <p>User Id: {id}</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            {
                age > 18 
                ?
                <p>Welcome to the portal</p>
                :
                <p>You are not allowed to enter the portal</p>
            }
        </div>
    )
}

export default UserInfo