import React from 'react';

export const Address = ({ users }) => {
    const skopjeUsers = users.filter(user => user.adresa === 'Skopje');
  
    return (
      <div>
        <h2>Users living in Skopje:</h2>
        {skopjeUsers.length > 0 ? (
          skopjeUsers.map(user => (
            <div key={user.ime}>
              <p>{user.ime} {user.prezime}</p>
              <p>Address: {user.adresa}</p>
            </div>
          ))
        ) : (
          <p>No users living in Skopje.</p>
        )}
      </div>
    );
  }
  