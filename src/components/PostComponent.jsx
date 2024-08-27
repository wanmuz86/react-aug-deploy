import React, { useState } from 'react'

const PostComponent = () => {
    const [formData, setFormData] = useState({
        'name': '',
        'phone': '',
        'email': ''
    })

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    return (
        <div>
            <h2>API POST Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" name='phone' id='phone' value={formData.phone} onChange={handleChange} />
                </div>
                <button type="submit">Add new User</button>
            </form>
        </div>
    )
}

export default PostComponent