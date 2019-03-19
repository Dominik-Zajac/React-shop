import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../actions/actions-products';
import ProductDetails from './ProductDetails';

class ProductDetailsContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(getProduct(this.props.params.id));
	}

	render() {
		return (
			<ProductDetails product={ this.props.selectedProduct } />
		)
	}
}

const mapStateToProps = function(store) {
	return {
		selectedProduct: store.productsReducer.selectedProduct
	};
};

export default connect(mapStateToProps)(ProductDetailsContainer);