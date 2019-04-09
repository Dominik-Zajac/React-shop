import React from 'react';

const ProductInfo = (props) => {
    return (
        <div className='product-info'>
            <h3 className='title-product'>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default ProductInfo;