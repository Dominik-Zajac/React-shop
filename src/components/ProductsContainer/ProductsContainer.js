import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsLayout from '../ProductsLayout/ProductsLayout';
import { getProducts } from '../../actions/actions-products';

/* Styles */
import './ProductsContainer.scss';

class ProductsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getProducts());
    }

    render(props) {
        return (
            <div className='products-wrapper'>
                <ProductsLayout products={ this.props.visibleProducts } />
            </div>
        )
    }
};

const mapStateToProps = function(store) {
    return {
        visibleProducts: store.productsReducer.visibleProducts,
    };
};

export default connect(mapStateToProps)(ProductsContainer);