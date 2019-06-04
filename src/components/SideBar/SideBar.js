import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from './SortTitle';
import SortButtons from './SortButtons';
import Line from './Line';
import InputSearch from './InputSearch';
import { searchProducts, sortProducts } from '../../actions/actions-products';

/* Styles */
import './SideBar.scss';

class SideBar extends Component {
    componentDidMount() {
        this.props.dispatch(searchProducts(''));
    }

    search(e) {
        this.props.dispatch(searchProducts(e.target.value));
    }

    sort(name, order) {
        this.props.dispatch(sortProducts(name, order));
        this.props.dispatch(searchProducts(''));
    }

    render() {
        return (
            <div className='sidebar-box'>
                <Title />
                <SortButtons clickSort={this.sort.bind(this)} />
                <Line />
                <InputSearch changeSearch={this.search.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        visibleProducts: store.productsReducer.visibleProducts,
    }
};

export default connect(mapStateToProps)(SideBar);