import React, { useState } from 'react';
import Training from './components/Training';

export function App() {
  const [listOfThings, setListOfThings] = useState([
    { id: 1, name: "Pero", lastName: "Perovski", year: 1996 },
    { id: 2, name: "Ivan", lastName: "Ivanovski", year: 1997 },
    { id: 3, name: "Stefan", lastName: "Stefanovski", year: 1998 }
  ]);

  const deleteItem = (id) => {
    const updatedList = listOfThings.filter(item => item.id !== id);
    setListOfThings(updatedList);
  };

  return (
    <div>
     <Training listOfThings={listOfThings} setListOfThings={setListOfThings} onDelete={deleteItem} />
    </div>
  );
}


