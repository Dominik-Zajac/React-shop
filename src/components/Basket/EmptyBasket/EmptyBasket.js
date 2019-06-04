import React from 'react';

/* Styles */
import './EmptyBasket.scss';

const EmptyBasket = () => {
    return (
        <div className='container-basket'>
            <img
                src='https://i.ibb.co/6BTfZ3n/empty-cart-min.png'
                alt='empty-cart'
            />
            <h1 className='title'>
                Twoj koszyk jest pusty
            </h1>
            <h2 className='subtitle'>
                Dodaj przedmioty do koszyka aby je kupic.
            </h2>
        </div>
    )
}

export default EmptyBasket;