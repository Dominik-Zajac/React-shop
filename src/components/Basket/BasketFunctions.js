import React from 'react';

const ProductFunctions = (props) => {
	return (
		<div className='product-functions'>
			<div className='volum'>
				<button 
					onClick={() => props.clickPieceRemove(props.id)}
					className={props.counter <= 1 ? 'disableBtn' : 'enableBtn'}
					disabled={props.counter <= 1 ? true : false}	
				>
					-
				</button>
				<span className='sum-counter'>{props.counter}</span>
				<button 
					onClick={() => props.clickPieceAdd(props.id)}
					className={props.counter < props.inMagazine ? 'enableBtn' : 'disableBtn'}
					disabled={props.counter < props.inMagazine ? false : true}
				>
					+
				</button>
				<span>ilosc szt.</span>
				<i className='icon far fa-trash-alt' onClick={() => props.clickDelete(props.id)}></i>
			</div>
		</div>
	)
}

export default ProductFunctions;