import React from 'react';
    import { Link } from 'react-router-dom';

    const NotFound = () =>{

        return(
            <div>
                <p>404 error</p>
                <p> invalid url</p>
                <Link to ="messages">Go back to the homepage</Link>
            </div>
        )
    }
    export default NotFound