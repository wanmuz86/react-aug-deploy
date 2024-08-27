import React from 'react'

const PostComponent = () => {
    return (
        <div>
            <h2>API POST Form</h2>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name'/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email'/>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" name='phone' id='phone'/>
                </div>
                <button type="submit">Add new User</button>
            </form>
            </div>
    )
}

export default PostComponent