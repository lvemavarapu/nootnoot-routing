import React from 'react'

const Message = ({msg}) =>{
    return(
        <div>
            <h4>{msg.text}</h4>
            <p>{msg.user}</p>
        </div>
    )
}

export default Message