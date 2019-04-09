import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faHeart, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const RowInfo = () => {
    return (
        <div className='row'>
            <div className='offer col-sm-12 col-lg-4'>
                <FontAwesomeIcon className='icon' icon={faThumbsUp} />
                <h2>Sprawdzony sklep</h2>
                <p>Sklep otrzymuje swietne opinie i recenzje.</p>
            </div>
            <div className='offer col-sm-12 col-lg-4'>
                <FontAwesomeIcon className='icon' icon={faHeart} />
                <h2>Najlepsza jakość</h2>
                <p>Posiadamy markowe sprzety swietnej jakosci.</p>
            </div>
            <div className='offer col-sm-12 col-lg-4'>
                <FontAwesomeIcon className='icon' icon={faMapMarkedAlt} />
                <h2>Dobra lokalizacja</h2>
                <p>Sklep zlokalizowany w centrum miasta.</p>
            </div>
        </div>
    )
}

export default RowInfo;