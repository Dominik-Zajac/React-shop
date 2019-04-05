import React from 'react';
import { Link } from 'react-router';

const Links = () => {
    return (
        <ul className='footer-nav'>
            <li className='footer-link'>
                <Link to='/home' activeClassName='active'>
                    Home
                </Link>
            </li>
            <li className='footer-link'>
                <Link to='/products' activeClassName='active'>
                    Products
                </Link>
            </li>
             <li className='footer-link'>
                <Link to='/faq' activeClassName='active'>
                    FAQ
                </Link>
            </li>
            <li className='footer-link'>
                <Link to='/regulations' activeClassName='active'>
                    Regulamin
                </Link>
            </li>
            <li className='footer-link'>
                <Link to='/contact' activeClassName='active'>
                    Kontakt
                </Link>
            </li>
        </ul>
    )
}

export default Links;