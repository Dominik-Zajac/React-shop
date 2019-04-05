import React, { Component } from 'react';
import { connect } from 'react-redux';
import Basket from './Basket';
import { deleteProduct, pieceAdd, pieceRemove } from '../../actions/actions-basket';

class BasketContainer extends Component {
	
	handleRemoveProduct(id) {
		this.props.dispatch(deleteProduct(id))
	}

	handlePieceAdd(id){
		this.props.dispatch(pieceAdd(id));
	}

	handlePieceRemove(id) {
		this.props.dispatch(pieceRemove(id));
	}

	render() {
		return (
			<Basket
				 product={this.props.selectedProducts}
				 cart={this.props.cart}
				 counter={this.props.counter}
				 clickRemove={this.handleRemoveProduct.bind(this)}
				 clickPieceAdd={this.handlePieceAdd.bind(this)}
				 clickPieceRemove={this.handlePieceRemove.bind(this)}
			/>
		)
	}
}

const mapStateToProps = function(store) {
    return {
        cart: store.productsReducer.cart,
        counter: store.productsReducer.pieceCounter
    };
};

export default connect(mapStateToProps)(BasketContainer);
