import React from 'react';
import { Link } from 'react-router';

const NavLink = () => {
    return (
        <ul className='navbar-nav'>
            <li className='nav-link'>
                <Link to='/home' activeClassName='active'>
                    Home
                </Link>
            </li>
            <li className='nav-link'>
                <Link to='/products' activeClassName='active'>
                    Products
                </Link>
            </li>
             <li className='nav-link'>
                <Link to='/faq' activeClassName='active'>
                    FAQ
                </Link>
            </li>
            <li className='nav-link'>
                <Link to='/regulations' activeClassName='active'>
                    Regulamin
                </Link>
            </li>
            <li className='nav-link'>
                <Link to='/contact' activeClassName='active'>
                    Kontakt
                </Link>
            </li>
            <li className='nav-link'>
                <Link to='/koszyk' activeClassName='active'>
                    <i className='icon fas fa-shopping-basket'></i>
                </Link>
            </li>
        </ul>
    )
}

export default NavLink;