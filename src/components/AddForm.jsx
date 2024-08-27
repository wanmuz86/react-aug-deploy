import React, { useState } from 'react'

const AddForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: ''
    })
    const handleNameChanged = (e) => {
        setFormData({...formData, name:e.target.value})
    }

    const handleAgeChanged = (e) => {
        setFormData({...formData, name:e.target.value})
    }
    
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' value={formData.name} 
                onChange={handleNameChanged}/>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" value={formData.age} 
                onChange={handleAgeChanged}/>
            </div>
            <button type='submit'>Add new User</button>
        </form>
    )
}

export default AddForm