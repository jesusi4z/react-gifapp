import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');
    const HandleInputChange = (e) => {
        setinputValue(e.target.value);
    }
    const HandleSumbit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories([inputValue]);
            setinputValue('');
        }
     }
    return (
        <form onSubmit={HandleSumbit}>
            <div className="buscador">
            <h2>Buscador</h2>
                <input
                    type = "text"
                    value = {inputValue}
                    onChange = {HandleInputChange}
                ></input>
            </div>
        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
