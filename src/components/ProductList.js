import React from 'react';
import { Link } from 'react-router';
import ProductImage from './ProductImage';

const ProductList = props => (
	<div className=''>
		{ props.products.map(product => {
			return (
				<div className='' key={ product.id }>
					<Link className='navbar-brand' to={'products/product/' + product.id }>
						<ProductImage product={ product }/>
					</Link>
				</div>
			)
		})}
	</div>
);

export default ProductList;