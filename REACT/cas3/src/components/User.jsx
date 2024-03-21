import React from 'react';

export const User = (props) => {
    console.log(props)
    return(
        <div className='user'>
            <h3>Name: {props.name}</h3>
            <p>Adresa: {props.adresa}</p>
            {props.children}
        </div>
    )
}