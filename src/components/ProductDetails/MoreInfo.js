import React from 'react';

const MoreInfo = props => {
    const {
        producent, 
        model, 
        voltage, 
        power, 
        condition
    } = props;

    return (
        <div className='more-info'>
            <p className='product-heading'>
                Wiecej informacji
            </p>
            <p className='first-word'>
                Producent:  
                <span className='second-word'>
                    {producent}
                </span>
            </p>
            <p className='first-word'>
                Model:  
                <span className='second-word'>
                    {model}
                </span>
            </p>
            <p className='first-word'>
                Napiecie:  
                <span className='second-word'>
                    {voltage}
                </span>
            </p>
            <p className='first-word'>
                Moc:  
                <span className='second-word'>
                    {power}
                </span>
            </p>
            <p className='first-word'>
                Stan:  
                <span className='second-word'>
                    {condition}
                </span>
            </p>
        </div>
    )
}

export default MoreInfo;