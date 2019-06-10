import React from 'react';

const Image = props => (
    <img
        className='product-photo'
        src={props.imageUrl}
        alt={props.imageUrl}
    />
)

export default Image;