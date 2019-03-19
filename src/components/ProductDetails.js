import React from 'react';

const ProductDetails = props => (
	<div className='product-wrapper'>
		<header>
			<img className='product-photo' src={ props.product.imageUrl } />
		</header>
		<div className='product-info'>
			<h1>{ props.product.name }</h1>

			<div className='info'>
				<div>
					<span>{ props.product.price }</span>
				</div>
			</div>
		</div>
	</div>
);

export default ProductDetails;