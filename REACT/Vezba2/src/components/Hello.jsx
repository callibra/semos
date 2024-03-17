import React from 'react';

export const Hello = (props) => {
console.log(props);
    
    return(
        <div>
            <p>Hello, {props.name} {props.prezime} </p>
            <p>I'am {props.godini} years old</p>
        </div>
    )
}