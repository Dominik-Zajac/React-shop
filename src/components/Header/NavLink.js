import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

class NavLink extends Component {
    render() {
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
                    <Link to='/basket' activeClassName='active'>
                        <FontAwesomeIcon className='icon' icon={faShoppingBasket} />
                        <span>{this.props.counter}</span>
                    </Link>
                </li>
            </ul>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        counter: store.basketReducer.pieceCounter
    }
};

export default connect(mapStateToProps)(NavLink);