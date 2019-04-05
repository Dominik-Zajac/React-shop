import React from 'react';
import BoxProduct from './BoxProduct';
import DiscountInput from './BasketInput';
import SumPrice from './InfoSumPrice';
import BtnPay from './ButtonPay';

/* Styles */
import './Basket.scss';

const Basket = (props) => (
	<div className='basket-container'>
		<h1 className='title'>Koszyk</h1>
		{props.cart.map(product => {
			
			const {id, imageUrl, name, description, price, inMagazine} = product;
			const {counter, clickRemove, clickPieceAdd, clickPieceRemove} = props;
	 		
	 		return (
				<BoxProduct 
					key={id}
					id={id}
					imageUrl={imageUrl}
					name={name}
					description={description}
					price={price}
					inMagazine={inMagazine}
					counter={counter}
					clickDelete={clickRemove}
					clickPieceAdd={clickPieceAdd}
					clickPieceRemove={clickPieceRemove}
				/>
			)
		})}
		<div className='basket-functions'>
			<DiscountInput />
			<SumPrice />
			<BtnPay />
		</div>
	</div>
)	


export default Basket;
