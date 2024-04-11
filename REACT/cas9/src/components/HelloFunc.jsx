import React,{useEffect} from 'react';
import {sayHello,sayGoodbye} from './../actions/SayHelloActions';
import {useSelector,useDispatch} from "react-redux";

export const HelloFunc = () =>{

    const dispatch = useDispatch();
    const greeting = useSelector(state => state.SayHelloReducer.greeting);
    const farewell = useSelector(state => state.SayHelloReducer.farewell);

    useEffect(()=>{
        dispatch(sayHello())
        dispatch(sayGoodbye())
    },[])

    return(
        <div id="hello-func">
            <h2>{greeting}</h2>
            <h2>{farewell}</h2>
        </div>
    )
}