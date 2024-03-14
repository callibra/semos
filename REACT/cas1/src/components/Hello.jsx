import React from 'react';
import {Goodbye} from './Goodbye';


export class Hello extends React.Component{

    render(){
        return(
            <>
                <p style={{color:"red",backgroundColor:"green"}}>This is a class component</p>
                <h6>some random text</h6>
                <Goodbye/>
            </>
        )
    }
}

