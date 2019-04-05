import React from 'react';
import ProductImage from './BasketImage';
import ProductInfo from './BasketInfo';
import ProductPrice from './BasketPrice';
import ProductFunctions from './BasketFunctions';

const BoxProduct = (props) => {
	const {
		id, 
		name, 
		price, 
		counter, 
		imageUrl, 
		inMagazine, 
		clickDelete, 
		description, 
		clickPieceAdd, 
		clickPieceRemove
	} = props;
	return (
		<div className='box-products'>
			<ProductImage 
				id={id} 
				imageUrl={imageUrl}
			/> 
			<ProductInfo 
				name={name} 
				description={description} 
			/>		
			<ProductPrice 
				price={price} 
				counter={counter} 
			/>
			<ProductFunctions 
				id={id}
				counter={counter} 
				inMagazine={inMagazine} 
				clickDelete={clickDelete}
				clickPieceAdd={clickPieceAdd}
				clickPieceRemove={clickPieceRemove}
			/>
					
		</div>
	)}

export default BoxProduct;
