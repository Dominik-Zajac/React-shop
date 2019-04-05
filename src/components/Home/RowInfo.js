import React from 'react';

const RowInfo = () => {
    return (
        <div className='row'>
            <div className='offer col-sm-12 col-lg-4'>
                <i className='icon far fa-thumbs-up'></i>
                <h2>Sprawdzony sklep</h2>
                <p>Sklep otrzymuje swietne opinie i recenzje.</p>
            </div>
            <div className='offer col-sm-12 col-lg-4'>
                <i className='icon far fa-heart'></i>
                <h2>Najlepsza jakość</h2>
                <p>Posiadamy markowe sprzety swietnej jakosci.</p>
            </div>
            <div className='offer col-sm-12 col-lg-4'>
                <i className='icon fas fa-map-marked-alt'></i>
                <h2>Dobra lokalizacja</h2>
                <p>Sklep zlokalizowany w centrum miasta.</p>
            </div>
        </div>
    )
}

export default RowInfo;