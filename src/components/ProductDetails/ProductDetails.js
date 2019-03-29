import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductDetails.scss';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    
    render() {
        return(
            <div className='product-wrapper'>
                <div className='product-container row'>
                    <div className='image-box col-sm-12 col-lg-6'>
                        <img 
                            onClick={ this.toggle } 
                            className='product-photo' 
                            src={ this.props.product.imageUrl } 
                            alt={ this.props.product.name } 
                        />
                        <i onClick={ this.toggle } className='fas fa-search-plus'></i>
                        <Modal isOpen={ this.state.modal } toggle={ this.toggle } className='modal-box'>
                            <ModalHeader toggle={ this.toggle }>{ this.props.product.name }</ModalHeader>
                            <ModalBody>
                                <img 
                                    className='product-photo' 
                                    src={ this.props.product.imageUrl } 
                                    alt={ this.props.product.name } 
                                />
                            </ModalBody>
                        </Modal> 
                    </div>
                    <div className='product-info col-sm-12 col-lg-6'>
                        <h1 className='title'>{ this.props.product.name }</h1>
                        <p>{ this.props.product.price }</p>
                        <button>Dodaj do koszyka</button>
                    </div>
                </div>
                <div className='more-info'>
                    <p className='product-heading'>Wiecej informacji</p>
                    <p className='first-word'>Producent: <span className='second-word'>{ this.props.product.producent }</span></p>
                    <p className='first-word'>Model: <span className='second-word'>{ this.props.product.model }</span></p>
                    <p className='first-word'>Napiecie: <span className='second-word'>{ this.props.product.voltage }</span></p>
                    <p className='first-word'>Moc: <span className='second-word'>{ this.props.product.power }</span></p>
                    <p className='first-word'>Stan: <span className='second-word'>{ this.props.product.condition }</span></p>
                </div>
            </div>
        )
    }
};

export default ProductDetails;