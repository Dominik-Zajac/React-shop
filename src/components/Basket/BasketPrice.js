import React from 'react';

const ProductPrice = props => {
    return (
        <div className='product-price'>
            <p className='sum-price'>{parseFloat(props.price) * props.count}<span>,00 zl</span></p>
            <p className='price'>za sztuke {props.price}</p>
        </div>  
    )
}

export default ProductPrice;