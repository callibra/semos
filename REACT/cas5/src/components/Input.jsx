import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({type,placeholder,value,onChange,name,setToggle}) => {
    return(
        <p>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />
            {name=== "password" && 
            <button type='button' onClick={setToggle}>
                <i className={type==="password" ? 'fa fa-eye-slash' : "fa fa-eye"}></i>
            </button>}
        </p>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder:PropTypes.string,
    value:PropTypes.any.isRequired,
    onChange:PropTypes.func.isRequired,
    name:PropTypes.string,
    setToggle:PropTypes.func
}