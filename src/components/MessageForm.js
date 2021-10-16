import React, {useState} from 'react'

const MessageForm = ({history,addMessage,loggedInUser}) =>{
    const initialFormData = {
        text:""
    }
    const [formData, setFormData] = useState(initialFormData)


    function handleSubmit(e){
        e.preventDefault()
        addMessage(formData.text)

        setFormData({
            ...formData,
            text: ""
        })
        return history.push("/messages")
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
             <div>
            {loggedInUser?
            <form onSubmit={handleSubmit}>
            <label htmlFor="text">what's on your mind {loggedInUser}?</label>
            <input type="text" name="text" id="text" value={formData.text} onChange={handleFormData} />
            <input type="submit" value="Send" />

        </form>
        :
        <p>please log in to continue</p>
            }
           
        </div>
        </div>
    )
}

export default MessageForm