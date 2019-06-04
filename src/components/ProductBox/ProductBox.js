import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToBasket } from '../../actions/actions-basket';
import Image from './ProductBoxImage';
import InfoBox from './InfoBox';
import InfoColumn from './InfoColumn';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sass/animations.scss';
import './ProductBox.scss';

class ProductBox extends Component {
    handleClickAddToBasket(id) {
        this.props.dispatch(addToBasket(id));
    }

    render() {
        const {
            id,
            name,
            count,
            price,
            imageUrl,
            inMagazine,
            description
        } = this.props.product;

        return (
            <ReactCSSTransitionGroup
                transitionName='fade'
                transitionEnterTimeout={1500}
                transitionLeaveTimeout={2000}
                transitionAppear={true}
                transitionAppearTimeout={1500}
            >
                <div className='product-box'>
                    <Image
                        imageUrl={imageUrl}
                    />
                    <InfoBox
                        name={name}
                        description={description}
                    />
                    <InfoColumn
                        id={id}
                        price={price}
                        inMagazine={inMagazine}
                        count={count}
                        click={this.handleClickAddToBasket.bind(this)}
                    />
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        cart: store.productsReducer.cart,
        counter: store.productsReducer.pieceCounter
    }
};

export default connect(mapStateToProps)(ProductBox);
