import React from 'react';

/* Styles */
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className='error-container'>
            <img src='https://i.ibb.co/F4qkGWr/blad.png' alt='Blad'/>
            <p className='first-paragraph'>Strona niedostepna</p>
            <p className='second-paragraph'>Niestety, podany przez ciebie adres strony nie jest dostepny</p>
        </div>
    )
}

export default NotFound;