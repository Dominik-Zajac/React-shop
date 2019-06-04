import React from 'react';
import ProductImage from './BasketImage';
import ProductInfo from './BasketInfo';
import ProductPrice from './BasketPrice';
import ProductFunctions from './BasketFunctions';

const BoxProduct = props => {

    return (
        <div className='box-products'>
            <ProductImage {...props} />
            <ProductInfo {...props} />
            <ProductPrice {...props} />
            <ProductFunctions {...props} />
        </div>
    )
}

export default BoxProduct;
