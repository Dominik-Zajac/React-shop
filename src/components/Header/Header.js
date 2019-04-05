import React from 'react';
import Logo from './Logo';
import NavLink from './NavLink';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';

const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
                <Logo />
                <div className='collapse navbar-collapse'>
                    <NavLink />
                </div>
            </div>
        </nav>
    )
}

export default Header;