import  React from 'react';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductImage.scss';

const ProductImage = props => (
	<div className='product-box'>
		<img className='product-photo' src={ props.product.imageUrl } alt='product-photo' />
	</div>
);

export default ProductImage;