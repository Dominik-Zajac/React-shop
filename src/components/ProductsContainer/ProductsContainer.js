import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsLayout from '../ProductsLayout/ProductsLayout';

/* Styles */
import './ProductsContainer.scss';

class ProductsContainer extends Component {
    render() {
        return (
            <div className='products-wrapper'>
                <ProductsLayout products={this.props.visibleProducts} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        visibleProducts: store.productsReducer.visibleProducts,
    }
};

export default connect(mapStateToProps)(ProductsContainer);