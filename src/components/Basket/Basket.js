import React from 'react';
import BoxProduct from './BoxProduct';
import DiscountInput from './BasketInput';
import SumPrice from './InfoSumPrice';
import BtnPay from './ButtonPay';

/* Styles */
import './Basket.scss';

const Basket = props => {
    return (
        <div className='basket-container'>
            <h1 className='title'>Koszyk</h1>
            {props.carts.map(product => {
                const {
                    clickRemove,
                    clickPieceAdd,
                    clickPieceRemove
                } = props;

                return (
                    <BoxProduct
                        {...product}
                        key={product.id}
                        clickDelete={clickRemove}
                        clickPieceAdd={clickPieceAdd}
                        clickPieceRemove={clickPieceRemove}
                    />
                )
            })}
            <div className='basket-functions'>
                <DiscountInput />
                <SumPrice fullAmount={props.fullAmount} />
                <BtnPay />
            </div>
        </div>
    )
}

export default Basket;
