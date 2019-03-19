import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import { getProducts, searchProducts } from '../actions/actions-products';

class ProductContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(getProducts());
		this.props.dispatch(searchProducts(''));
	}

	search(e) {
		this.props.dispatch(searchProducts(e.target.value));
	}

	render() {
		return (
			<div>
				<div className='search text-center'>
					<input type='text' onChange={ this.search.bind(this) }/>
				</div>
				<ProductList products={ this.props.visibleProducts } />
			</div>
		)
	}
} 

const mapStateToProps = function(store) {
	return {
		products: store.productsReducer.products,
		visibleProducts: store.productsReducer.visibleProducts
	};
};

export default connect(mapStateToProps)(ProductContainer);