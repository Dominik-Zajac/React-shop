import React, { Component } from 'react';
import { Link } from 'react-router';
import ProductBox from '../ProductBox/ProductBox';
import PageNumbering from './Pagination';

/* Styles */
import './ProductsList.scss';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage : 0,
        }
    }

    handleClick(e, index) {
        e.preventDefault();

        this.setState({
            currentPage: index
        })
    }

    render() {
        const {currentPage} = this.state;
        const pageSize = 3;
        const pageCount = Math.ceil(this.props.products.length / pageSize);

        return (
            <div className='products-list'>
                {this.props.products.slice(
                    currentPage * pageSize,
                    (currentPage + 1) * pageSize
                ).map(product  => 
                    <div key={product.id}>
                        <Link className='navbar-brand' to={'products/product/' + product.id}>
                            <ProductBox product={product}/>
                        </Link>
                    </div>
                )}
                <PageNumbering 
                    pageSize={pageSize} 
                    pageCount={pageCount} 
                    currentPage={currentPage} 
                    click={this.handleClick.bind(this)} 
                />
            </div>
        )
    }

} 

export default ProductList;