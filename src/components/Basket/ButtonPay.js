import React from 'react';
import { Link } from 'react-router';

const BtnPay = () => {
    return (
        <Link className='navbar-brand' to={'basket/summary'}>
            <button className='btn-pay'>Zaplac</button>
        </Link>
    )
}

export default BtnPay;