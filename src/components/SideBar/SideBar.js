import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchProducts, sortProducts } from '../../actions/actions-products';

/* Styles */
import './SideBar.scss'; 

class SideBar extends Component {
    constructor(props) {
        super(props);
    }

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

    render(){
        return (
            <div className='sidebar-box'>
                <h2 className='sort-title'>Sortuj:</h2>
                <div className='sort-click' onClick={ () => this.sort('name', 'asc') }>Nazwa A-Z</div>
                <div className='sort-click' onClick={ () => this.sort('name', 'desc') }>Nazwa Z-A</div>
                <div className='sort-click' onClick={ () => this.sort('price', 'asc') }>Cena rosnaco</div>
                <div className='sort-click' onClick={ () => this.sort('price', 'desc') }>Cena malejaco</div>
                <div className='line'></div>
                <input 
                    type='text'
                    minLength='2'
                    maxLength='20'
                    placeholder='Search...' 
                    onChange={ this.search.bind(this) }
                />
            </div>
        )
    }
};

const mapStateToProps = function(store) {
    return {
        visibleProducts: store.productsReducer.visibleProducts,
    };
};

export default connect(mapStateToProps)(SideBar);