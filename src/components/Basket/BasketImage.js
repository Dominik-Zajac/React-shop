import React from 'react';
import { Link } from 'react-router';

const ProductImage = (props) => {
	return (
		<Link className='navbar-brand' to={'products/product/' + props.id }>
			<img className='product-photo' src={props.imageUrl } alt='product-photo' />
		</Link>
	)
}

export default ProductImage;