import React from 'react';

const InputSearch = props => (
    <input 
        type='text'
        minLength='2'
        maxLength='20'
        placeholder='Search...' 
        onChange={props.changeSearch}
    />
)

export default InputSearch;