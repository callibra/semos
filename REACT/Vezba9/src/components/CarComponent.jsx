import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCar, removeCar } from "../actions/CarActions";
import '../css/Style.css';

const CarComponent = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);
  const [newCarName, setNewCarName] = useState("");
  const [newCarYear, setNewCarYear] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddCar = () => {
    if (!newCarName.trim()) {
      setErrorMessage("Please enter a car name");
      return;
    }

    if (!newCarYear.trim()) {
      setErrorMessage("Please enter a car year");
      return;
    }

    const newCar = { id: Math.random(), name: newCarName, year: newCarYear };
    dispatch(addCar(newCar));
    setNewCarName("");
    setNewCarYear("");
    setErrorMessage("");
  };

  const handleRemoveCar = (carId) => {
    dispatch(removeCar(carId));
  };

  return (
    <div className="car-container">
      <h2>Car List</h2>
      <div className="input-container">
        <label htmlFor="carNameInput">Car Name:</label>
        <input
          id="carNameInput"
          type="text"
          value={newCarName}
          onChange={(e) => setNewCarName(e.target.value)}
          placeholder="Enter car name"
          title="Car Name Input"
        />
      </div>
      <div className="input-container">
        <label htmlFor="carYearInput">Car Year:</label>
        <input
          id="carYearInput"
          type="text"
          value={newCarYear}
          onChange={(e) => setNewCarYear(e.target.value)}
          placeholder="Enter car year"
          title="Car Year Input"
        />
      </div>
      <button onClick={handleAddCar}>Add Car</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <ul className="car-list">
        {cars.map((car) => (
          <li key={car.id} className="car-item">
            <div className="car-details">
              <span className="car-name">Car Name: </span><span className="input-value">{car.name}</span>
            </div>
            <div className="car-details">
              <span className="car-year">Car Year: </span><span className="input-value">{car.year}</span>
            </div>
            <button className="remove-button" onClick={() => handleRemoveCar(car.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarComponent;
