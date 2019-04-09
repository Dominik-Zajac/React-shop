import React from 'react';
import BoxProduct from './BoxProduct';
import DiscountInput from './BasketInput';
import SumPrice from './InfoSumPrice';
import BtnPay from './ButtonPay';

/* Styles */
import './Basket.scss';

const Basket = (props) => {
    return (
        <div className='basket-container'>
            <h1 className='title'>Koszyk</h1>
            {props.carts.map(product => {
                
                const {
                    id, 
                    name, 
                    price, 
                    count,
                    imageUrl, 
                    inMagazine, 
                    description 
                } = product;
                const {
                    counter, 
                    clickRemove, 
                    clickPieceAdd, 
                    clickPieceRemove
                } = props;
                
                return (
                    <BoxProduct
                        count={count} 
                        key={id}
                        id={id}
                        imageUrl={imageUrl}
                        name={name}
                        description={description}
                        price={price}
                        inMagazine={inMagazine}
                        clickDelete={clickRemove}
                        clickPieceAdd={clickPieceAdd}
                        clickPieceRemove={clickPieceRemove}
                    />
                )
            })}
            <div className='basket-functions'>
                <DiscountInput />
                <SumPrice fullAmount={props.fullAmount}/>
                <BtnPay />
            </div>
        </div>
    )
}   

export default Basket;
