import  React from 'react';

const ProductImage = props => (
	<div className=''>
		<img className='' src={ props.product.imageUrl } alt='product-photo' />
	</div>
);

export default ProductImage;