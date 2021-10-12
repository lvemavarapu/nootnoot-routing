import React, {useState} from 'react'

const MessageForm = ({addMessage}) =>{
    const initialFormData = {
        text:""
    }
    const [formData, setFormData] = useState(initialFormData)


    function handleSubmit(e){
        e.preventDefault()
        addMessage(formData.text)
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
                <input type="text" name="text" id="text" placeholder="What's going on today" onChange={handleFormData} />
                <input type="submit" value="Send" />

            </form>
        </div>
    )
}

export default MessageForm