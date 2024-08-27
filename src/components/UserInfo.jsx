import React from 'react'

const UserInfo = ({ user , handleDelete}) => {
    const {id, name, age} = user;
   //  const deletePressed = () => handleDelete(user.id)
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
            <button onClick={() => handleDelete(id)}>Delete User</button>
        </div>
    )
}

export default UserInfo