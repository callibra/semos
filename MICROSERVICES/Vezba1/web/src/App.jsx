import React, { useState } from 'react';

import Login from './Login';
import Register from './Register';

function App() {
  const [location, setLocation] = useState('login');

  const locationChange = (e) => {
    setLocation(e.target.dataset.target);
  };
  return (
    <div>
      <nav>
        <button onClick={locationChange} data-target='login'>
          Login
        </button>
        <button onClick={locationChange} data-target='register'>
          Register
        </button>
      </nav>
      <div>{location === 'login' ? <Login /> : null}</div>
      <div>{location === 'register' ? <Register /> : null}</div>
    </div>
  );
}

export default App;
