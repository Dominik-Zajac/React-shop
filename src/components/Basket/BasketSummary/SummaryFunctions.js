import React from 'react';

const SummaryFunctions = (props) => {
    return (
        <div className='summary-functions'>
            <span>Do zaplaty: {props.sumPrice} zl</span>
            <button>Zamow i zaplac</button>
        </div>  
    )
}

export default SummaryFunctions;