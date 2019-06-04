import React from 'react';

const SortButtons = props => {
    const { clickSort } = props;

    return (
        <div className='box-buttons'>
            <div
                className='sort-click'
                onClick={() => clickSort('name', 'asc')}
            >
                Nazwa A-Z
            </div>
            <div
                className='sort-click'
                onClick={() => clickSort('name', 'desc')}
            >
                Nazwa Z-A
            </div>
            <div
                className='sort-click'
                onClick={() => clickSort('price', 'asc')}
            >
                Cena rosnaco
            </div>
            <div
                className='sort-click'
                onClick={() => clickSort('price', 'desc')}
            >
                Cena malejaco
            </div>
        </div>
    )
}

export default SortButtons;