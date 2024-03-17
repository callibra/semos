import React from 'react';

export const Age = ({ users }) => {
    const over18Users = users.filter(user => user.godini > 18);
    const under18Users = users.filter(user => user.godini <= 18);
  
    return (
      <div>
        <h2>Users older than 18:</h2>
        {over18Users.map(user => (
          <div key={user.ime}>
            <p>{user.ime} {user.prezime}</p>
            <p>Age: {user.godini}</p>
          </div>
        ))}
        <h2>Less then 18:</h2>
        {under18Users.length > 0 ? (
          under18Users.map(user => (
            <div key={user.ime}>
              <p>{user.ime} {user.prezime}</p>
              <p>Age: {user.godini}</p>
            </div>
          ))
        ) : (
          <p>Less than 18</p>
        )}
      </div>
    );
  }
