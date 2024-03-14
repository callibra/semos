import React from "react"; //var nesto = require("")es5
import {Hello} from './components/Hello';
import {Cars} from './components/Cars';
import {Text} from './components/Text';

export function App(){
  
  const broj = 1; //number
  let fraza = "vednost string"; //string
  var c = "c"; //char
  

  return (
   <div id="app">
    <h1>Welcome to my app</h1>
    <Hello/>
    <hr/>
    <p>{5+3}</p>
    <Hello/>
    <h2>Brojot e: {broj}</h2>
    <h4>Frazata e: {fraza}</h4>
    <h6>Karakter na denot e: {c}</h6>
    <Cars />
    <hr/>
    <Text />
   </div>
  );
}


