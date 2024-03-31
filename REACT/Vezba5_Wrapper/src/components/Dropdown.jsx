import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = ({elements,onChange}) =>{

    return(
        <div id="dropdown">
           <select onChange={onChange}>
            {elements.map((elem,i)=>{
                return(
                    <option value={elem.value} key={i}>
                        {elem.name}
                    </option>
                )
            })}
            </select>
        </div>
    )
}

Dropdown.propTypes={
    elements: PropTypes.arrayOf(PropTypes.object),
    onChange:PropTypes.func
}