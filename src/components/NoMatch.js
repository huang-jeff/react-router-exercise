import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className="content">
            <h1>Uhhhh...404</h1>
            <p>Oh boy... I don't think we should be here.</p>
            <Link to={'/'}>Go back home.</Link>
        </div>
    )
}

export default NoMatch;
