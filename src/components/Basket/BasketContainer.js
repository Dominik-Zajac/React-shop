import React, { Component } from 'react';
import { connect } from 'react-redux';
import Basket from './Basket';
import EmptyBasket from './EmptyBasket/EmptyBasket';
import { deleteProduct, pieceAdd, pieceRemove } from '../../actions/actions-basket';

class BasketContainer extends Component {
    constructor(props) {
        super(props);

        this.clickRemove = this.handleRemoveProduct.bind(this);
        this.clickPieceAdd = this.handlePieceAdd.bind(this);
        this.clickPieceRemove = this.handlePieceRemove.bind(this);
    }

    handleRemoveProduct(id) {
        this.props.dispatch(deleteProduct(id));
    }

    handlePieceAdd(id) {
        this.props.dispatch(pieceAdd(id));
    }

    handlePieceRemove(id) {
        this.props.dispatch(pieceRemove(id));
    }

    render() {
        const {
            carts,
            selectedProducts,
            fullAmount
        } = this.props;

        return (
            /* Liczba produktow uzaleznia wyswietalnie danego (komponentu) koszyka */
            carts < 1
                ? <EmptyBasket />
                : <Basket
                    carts={carts}
                    fullAmount={fullAmount}
                    product={selectedProducts}
                    clickRemove={this.clickRemove}
                    clickPieceAdd={this.clickPieceAdd}
                    clickPieceRemove={this.clickPieceRemove}
                />
        )
    }
}

const mapStateToProps = function (store) {
    return {
        carts: store.basketReducer.carts,
        fullAmount: store.basketReducer.sumPrice
    }
};

export default connect(mapStateToProps)(BasketContainer);
