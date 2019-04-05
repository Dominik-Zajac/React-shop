import  React from 'react';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductImage.scss';

const ProductImage = (props) => (
    <div className='product-box'>
        <img className='product-photo' src={ props.product.imageUrl } alt='product-photo' />
        <p className='product-title'>{ props.product.name }</p>
		<div className='info-column'>
        	<p className='product-price'>{ props.product.price }</p>
    		<button>Kup teraz</button>
    	</div>
    </div>
)

export default ProductImage;