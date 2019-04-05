import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div className='nav-logo'>
            <Link className='navbar-brand' to='/'>
                Narzedzia
            </Link>
        </div>
    )
}

export default Logo;