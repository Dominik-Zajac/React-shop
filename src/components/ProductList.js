import React from 'react';
import { Link } from 'react-router';
import ProductImage from './ProductImage';
import 'bootstrap/dist/css/bootstrap-grid.min.css';


const ProductList = props => (
	<div className='row'>
		{ props.products.map(product => {
			return (
				<div className='col-sm-6' key={ product.id }>
					<Link className='navbar-brand' to={'products/product/' + product.id }>
						<ProductImage product={ product }/>
					</Link>
				</div>
			)
		})}
	</div>
);

export default ProductList;