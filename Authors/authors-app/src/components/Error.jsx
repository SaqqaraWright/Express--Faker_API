import React from 'react';
import {Link} from 'react-router-dom'

const Error = ()=>{

    return (
        <div>
            <h1>We're sorry but we could not find the author you're looking for...</h1>
            <Link to="/new" className="btn btn-info">Add an Author</Link>
        </div>
    )
}

export default Error;
