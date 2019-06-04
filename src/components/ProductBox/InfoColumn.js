import React from 'react';
import { Link } from 'react-router';

const InfoColumn = props => {
    const {
        id,
        click,
        price,
        count,
        inMagazine
    } = props;

    const conditionClass = count === inMagazine
        ? 'disableBtn'
        : 'enableBtn';

    const conditionText = count === inMagazine
        ? 'Wyprzedane'
        : 'Kup Teraz';

    const conditionDisabled = count === inMagazine
        ? true
        : false;

    return (
        <div className='info-column'>
            <p className='product-price'>{price}</p>
            <Link to='basket'>
                <button
                    onClick={() => click(id)}
                    className={conditionClass}
                    disabled={conditionDisabled}
                >
                    {conditionText}
                </button>
            </Link>
        </div>
    )
}

export default InfoColumn;