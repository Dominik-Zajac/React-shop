import React from 'react';

const Image = (props) => (
    <img 
        className='product-photo' 
        src={props.imageUrl} 
        alt='product-photo' 
    />
)

export default Image;