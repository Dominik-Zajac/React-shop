import React, { Component } from 'react';
import ProductsList from '../ProductsList/ProductsList';
import SideBar from '../SideBar/SideBar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* Styles */
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../../sass/animations.scss';

const ProductsLayout = (props) => {
    return (
        <ReactCSSTransitionGroup
            transitionName='fade'
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={2000}
            transitionAppear={true}
            transitionAppearTimeout={1500}
        >
            <div className='row'>
                <div className='col-sm-6'>
                    <SideBar />
                </div>
                <div className='col-sm-6'>
                    <ProductsList products={props.products}/>
                </div>
            </div>
        </ReactCSSTransitionGroup>
    ) 
}

export default ProductsLayout;