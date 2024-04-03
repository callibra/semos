import React from 'react';
import RectDOM from 'react-dom';
import { App } from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

const root = RectDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <App /> 
    </Router>
);

{/* <Route path="/" component={App}/> */}