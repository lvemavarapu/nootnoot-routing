import React from 'react'
import Message from './Message'

const Messages = ({messageList}) =>{
    
    return(
        <div>
            <h3>Messages</h3>
            {messageList.map((item, index) =>
                <Message msg={item}/>
            )}
        </div>
    )
}

export default Messages