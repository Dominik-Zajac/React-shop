import React from 'react';

const TableTbody = props => {
    const {
        name,
        price,
        count,
        index,
        imageUrl,
        producent
    } = props;

    return (
        <tr>
            <th scope='row'>{index + 1}</th>
            <td>
                <img
                    className='summary-item-photo'
                    src={imageUrl}
                    alt={name}
                />
            </td>
            <td>{name}</td>
            <td>{producent}</td>
            <td>{count}</td>
            <td>{parseFloat(price) * count},00 zl</td>
        </tr>
    )
}

export default TableTbody;