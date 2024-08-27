import React, { useState } from 'react'

// handleAdd refers to props.handleAdd (object destructuring)
const AddForm = ({handleAdd}) => {
    const [formData, setFormData] = useState({
        name: '',
        age: ''
    })

    // reference to the event clicked on the caller, e.target here refers to caller (the input)
    const handleNameChanged = (e) => {
        setFormData({...formData, name:e.target.value}) // Object spread operator
    }

    const handleAgeChanged = (e) => {
        setFormData({...formData, age:e.target.value}) // Oject spread operator
    }

    // e is the action happening on the form
    // e.target is the form
    const handleSubmit = (e) => {
        e.preventDefault() // Stop the default POST behaviour of browser / don't refresh the page
        console.log(formData) // to verify data added by user

        handleAdd(formData); // Call the props by passing the data to the parent

        setFormData({
            name:'',
            age:''
        })

    }

    return (
        <form onSubmit={handleSubmit}>
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