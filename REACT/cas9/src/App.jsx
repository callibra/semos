import React from 'react';
import Hello from './components/Hello';
// import {HelloFunc} from './components/HelloFunc';

export function App(){

  return(
    <div id="app">
      <Hello/>
      {/* <HelloFunc/> */}
    </div>
  )
}

// on init install(run this command) -> npm i react-redux redux-logger @reduxjs/toolkit