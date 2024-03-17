import React from 'react';

export function Student(props){
console.log(props)
    return(
        <div id="student">
            <p>Student: </p>
            <p>Name: {props.ucenik.name} </p>
            <p>Address: {props.ucenik.address} </p>
            <p>College: {props.ucenik.college} </p>
            <p>Index: {props.ucenik.index} </p>

        </div>
    )
}