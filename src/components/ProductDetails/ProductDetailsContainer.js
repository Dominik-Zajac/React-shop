import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProduct, addToBasket } from '../../actions/actions-products';
import ProductDetails from './ProductDetails';


class ProductDetailsContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getProduct(this.props.params.id));
    }

    // handleClickAddToBasket(id) {
        // console.log('dzialam' + id)
        // this.props.dispatch(addToBasket());
    // }

    // click(id) {
        // this.props.dispatch(addToBasket(id));
    // }

    render() {
        return (
            <ProductDetails 
                product={ this.props.selectedProduct }
                counter={this.props.counter}
                cart={this.props.cart}
            />
        );
    }
};

const mapStateToProps = function(store) {
    return {
        selectedProduct: store.productsReducer.selectedProduct,
        cart: store.productsReducer.cart,
        counter: store.productsReducer.pieceCounter
    };
};

export default connect(mapStateToProps)(ProductDetailsContainer);