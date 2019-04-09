import React from 'react';

const InfoBox = props => {
    return (
    <div className='info-box'>
        <p className='product-title'>{props.name}</p>
        <span className='product-desc'>{props.description}</span>
    </div>
    )
}

export default InfoBox;