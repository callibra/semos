import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Training({listOfThings, setListOfThings,}) {
  const [newItem, setNewItem] = useState({ name: '', lastName: '', year: '' });
  const [editItem, setEditItem] = useState(null);

  const handleAddItem = () => {
    if (newItem.name.trim() && newItem.lastName.trim() && newItem.year.trim()) {
      const id = listOfThings.length > 0 ? listOfThings[listOfThings.length - 1].id + 1 : 1;
      const newItemWithId = { ...newItem, id: id };
      const updatedList = [...listOfThings, newItemWithId];
      setListOfThings(updatedList);
      setNewItem({ name: '', lastName: '', year: '' }); // Clear input fields
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleDeleteItem = (id) => {
    const updatedList = listOfThings.filter(item => item.id !== id);
    setListOfThings(updatedList);
  };

  const handleEditItem = (item) => {
    setEditItem(item);
  };

  const handleSaveEdit = () => {
    const updatedList = listOfThings.map(item => {
      if (item.id === editItem.id) {
        return editItem;
      }
      return item;
    });
    setListOfThings(updatedList);
    setEditItem(null);
  };

  return (
    <div>
      <div>
        <label>Name: </label>
        <input type="text" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text" value={newItem.lastName} onChange={(e) => setNewItem({ ...newItem, lastName: e.target.value })} />
      </div>
      <div>
        <label>Year: </label>
        <input type="text" value={newItem.year} onChange={(e) => setNewItem({ ...newItem, year: e.target.value })} />
      </div>
      <button onClick={handleAddItem}>Add Item</button>

      <h2>List</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listOfThings.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{editItem && editItem.id === item.id ? <input value={editItem.name} onChange={e => setEditItem({ ...editItem, name: e.target.value })} /> : item.name}</td>
              <td>{editItem && editItem.id === item.id ? <input value={editItem.lastName} onChange={e => setEditItem({ ...editItem, lastName: e.target.value })} /> : item.lastName}</td>
              <td>{editItem && editItem.id === item.id ? <input value={editItem.year} onChange={e => setEditItem({ ...editItem, year: e.target.value })} /> : item.year}</td>
              <td>
                {editItem && editItem.id === item.id ? (
                  <>
                    <button onClick={handleSaveEdit}>Save</button>
                    <button onClick={() => setEditItem(null)}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEditItem(item)}>Edit</button>
                )}
                <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Training.propTypes = {
  listOfThings: PropTypes.array.isRequired,
  setListOfThings: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Training;