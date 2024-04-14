import React from 'react';
import {Cake} from './components/Cake';
import {Routes,Route} from 'react-router-dom';
import {Nav} from './components/Nav';
import {Comments} from './components/Comments';

export function App(){

  return(
    <div id="app">
      <Nav/>
      <Routes>
        <Route path="/cake" element={<Cake/>}/>
        <Route path="/comments" element={<Comments/>}/>
      </Routes>
    </div>
  )
}