import React from 'react'

const Navigation = ({loggedInUser, setLoggedInUser}) =>{
    
    function logout(e){
        e.preventDefault()
        setLoggedInUser("")
        console.log("log out")
    }
    
    return(
        <div>
            <a href="/">Home</a>
            <a href="/">About</a>
            {loggedInUser?
                <>
                    <a href="/" onClick={logout}>Sign Out</a>
                    {loggedInUser}
                </>
                :
                <>
                    <a href="/">Login</a>
                    <a href="/">SignUp</a>
                    Guest
                </>
            }
        </div>
    )
}

export default Navigation