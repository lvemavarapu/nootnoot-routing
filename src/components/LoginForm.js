import React, { useState } from 'react'

const LoginForm = ({activateUser}) =>{
    const initialFormData = {
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialFormData)


    function handleSubmit(e){
        e.preventDefault()
        //console.log(formData.email)
        activateUser(formData.email)
    }
    function handleFormData(e){
        //console.log(e.target)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    } 

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" name="email" id="email" onChange={handleFormData}/>
                <label>Password:</label>
                <input type="password" name="password" id="password" onChange={handleFormData}/>
                <input type="submit" value="Log in" />
            </form>
        </div>
    )
}

export default LoginForm