import React from 'react';
import { Link } from 'react-router';
import ProductImage from '../ProductImage/ProductImage';

/* Styles */
import './ProductsList.scss';

const ProductList = props => (
    <div className='products-list'>
        { props.products.map(product => {
            return (
                <div key={ product.id }>
                    <Link className='navbar-brand' to={'products/product/' + product.id }>
                        <ProductImage product={ product }/>
                    </Link>
                </div>
            )
        })}
    </div>
);

export default ProductList;