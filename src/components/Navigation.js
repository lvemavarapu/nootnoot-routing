import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({loggedInUser, setLoggedInUser}) =>{
    
    function logout(e){
        e.preventDefault()
        setLoggedInUser("")
        console.log("log out")
    }
    
    return(
        <div>
            <Link to="/messages">Home</Link>
            <Link to="/About">About</Link>
            {loggedInUser?
                <>
                    
                    {loggedInUser}
                    <Link to="/newmessage">Post a new message</Link>
                    <Link to="/messages" onClick={logout}> Sign Out</Link>
                </>
                :
                <>
                   
                    <Link to="/login">Login</Link>
                    <Link to="/signup">SignUp</Link>
                    Guest
                </>
            }
        </div>
    )
}

export default Navigation