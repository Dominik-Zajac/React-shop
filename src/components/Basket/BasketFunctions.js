import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ProductFunctions = props => {
    return (
        <div className='product-functions'>
            <button 
                onClick={() => props.clickPieceRemove(props.id)}
                className={props.count <= 1 ? 'disableBtn' : 'enableBtn'}
                disabled={props.count <= 1 ? true : false}    
            >
                -
            </button>
            <span className='sum-counter'>{props.count}</span>
            <button 
                onClick={() => props.clickPieceAdd(props.id)}
                className={props.count < props.inMagazine ? 'enableBtn' : 'disableBtn'}
                disabled={props.count < props.inMagazine ? false : true}
            >
                +
            </button>
            <span className='amount'>ilosc szt.</span>
            <FontAwesomeIcon 
                className='icon' 
                icon={faTrashAlt}
                onClick={() => props.clickDelete(props.id)}
            />
        </div>
    )
}

export default ProductFunctions;