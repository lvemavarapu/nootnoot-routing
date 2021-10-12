import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import LoginForm from './LoginForm'
import MessageForm from './MessageForm'
import Messages from './Messages'
import initialMessageList from '../data/message-list.json'


const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("")
  const [messageList, setMessageList] = useState([])

  function activateUser(name){
    setLoggedInUser(name)
  }

  function addMessage(text){
    const message = {
      text: text,
      user: loggedInUser
    }
    setMessageList(
      (messageList) => [message, ...messageList]
    )
  }

  useEffect(()=>{
    setMessageList(initialMessageList)
  },[])

  return (
    <div>
          <h1>NootNoot</h1>
          <Navigation loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
          {loggedInUser?
            <MessageForm addMessage={addMessage}/>
          :
            <LoginForm activateUser={activateUser}/>
          }
          <Messages messageList={messageList}/>
    </div>
  )
}

export default App
