import React, { Component } from 'react';
import ProductsList from '../ProductsList/ProductsList';
import SideBar from '../SideBar/SideBar';

/* Styles */
import 'bootstrap/dist/css/bootstrap-grid.min.css';

export class ProductsLayout extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-sm-6'>
                    <SideBar />
                </div>
                <div className='col-sm-6'>
                    <ProductsList products={ this.props.products }/>
                </div>
            </div>
        ) 
    }
};

export default ProductsLayout;