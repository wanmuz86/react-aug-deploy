import React, { useState } from 'react'
import axios from 'axios'

const PostComponent = () => {
    const [formData, setFormData] = useState({
        'name': '',
        'phone': '',
        'email': ''
    })

    const handleChange = (e) => {
// Object destructing   const name = e.target.name  . value = e.target.value
        const { name, value } = e.target;

        // prevData = currentData  ...formData 
        // setting the formData but override [name/phone/email]  == to the value
    
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
// {'name':,'email','phone'} // {data:{'name','email',phone}} // {'sheet1':{'name','email',phone}}
        axios.post("https://api.sheety.co/0091a5271e549fdcbbd7d2f58d3a1e4c/data/sheet1", {sheet1:formData} )
        .then(data=>{
            console.log(data)
            alert("Data succesfully sent")
        })
        .catch(err=>{
            console.log(err)
        })


        setFormData({
            name:'',
            email:'',
            phone:''
        })
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