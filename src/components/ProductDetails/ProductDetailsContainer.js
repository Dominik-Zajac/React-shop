import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../../actions/actions-products';
import { addToBasket } from '../../actions/actions-basket';
import ImageBox from './ImageBox';
import TitleProduct from './TitleProduct';
import Price from './Price';
import BuyButton from './BuyBtn';
import MoreInfo from './MoreInfo';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductDetails.scss';

class ProductDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getProduct(this.props.params.id));
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    
    handleClickAddToBasket(id) {
        this.props.dispatch(addToBasket(id));
    }

    render() {
        const {
            id, 
            name, 
            power, 
            model,
            count, 
            price, 
            voltage, 
            imageUrl, 
            producent, 
            condition, 
            inMagazine 
        } = this.props.selectedProduct;
        
        return(
            <div className='product-wrapper'>
                <div className='product-container row'>
                    <ImageBox 
                        imageUrl={imageUrl} 
                        name={name}
                        toggle={this.toggle}
                        modal={this.state.modal}
                    />
                    <div className='product-info col-sm-12 col-lg-6'>
                        <TitleProduct name={name} />
                        <Price price={price} />
                        <BuyButton 
                            clickBuy={this.handleClickAddToBasket.bind(this, id)}
                            count={count}
                            inMagazine={inMagazine}
                        />
                    </div>
                </div>
                <MoreInfo 
                    producent={producent} 
                    model={model} 
                    voltage={voltage} 
                    power={power} 
                    condition={condition} 
                />
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        selectedProduct: store.productsReducer.selectedProduct,
        cart: store.productsReducer.cart
    }
};

export default connect(mapStateToProps)(ProductDetailsContainer);