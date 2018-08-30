import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className="navigation">
            <h1>Navigation</h1>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/page1'>Page1</Link>
            </div>
            <div>
                <Link to='/page2'>Page2</Link>
            </div>
            <div>
                <Link to='/page1/Kirill'>Hi Kirill</Link>
            </div>
        </div>
    )
}

export default NavBar;