import React, { useEffect, useState } from 'react';

function Login() {
  //1. Kje kreirame inicijalen objekt
  const initData = {
    email: '',
    password: '',
  };

  //2. Kje gi zacuvame podatocite sto kje gi ispratime na nasheto api vo jusstejt
  const [data, setData] = useState(initData);

  //3. Kje kreirame funkcija so koja kje gi sledime promenite vo formata
  const dataChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //4. Kje kreirame stejt koj kje proveruva dali sme logirani ili ne
  const [loggedIn, setLoggedIn] = useState(false);

  //5. Imame funckija login koja normaleno e asyhrona
  const login = async () => {
    try {
      console.log(data);
      let res = await fetch(`http://127.0.0.1:6002/api/v1/auth/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
        },
      });
      console.log(res);
      let pretvorenJsonBoOBjet = await res.json();

      if (res.ok) {
        setLoggedIn(true);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('token', pretvorenJsonBoOBjet.token);
      }
      alert(pretvorenJsonBoOBjet.status);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  });

  const logout = () => {
    setLoggedIn(false);
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('token');
  };

  return (
    <div>
      <div>
        <h2>Login form</h2>
        <label>Email</label>
        <br />
        <input
          type='email'
          name='email'
          value={data.email}
          onChange={dataChange}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type='password'
          name='password'
          value={data.password}
          onChange={dataChange}
        />
        <br />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;