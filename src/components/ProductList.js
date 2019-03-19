import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductImage from './ProductImage';

const ProductList = props => (
	<div className=''>
		{ props.products.map(product => {
			return (
				<div className='' key={ product.id }>
					<NavLink className='navbar-brand' exact to={'products/product/' + product.id }>
						<ProductImage product={ product }/>
					</NavLink>
				</div>
			)
		})}
	</div>
);

export default ProductList;