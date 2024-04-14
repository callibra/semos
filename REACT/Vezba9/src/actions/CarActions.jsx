const addCar = (car) => {
  return {
    type: "ADD_CAR",
    payload: car,
  };
};

const addCarYear = (carId, year) => {
  return {
    type: "ADD_CAR_YEAR",
    payload: { id: carId, year: year },
  };
};

const removeCar = (carId) => {
  return {
    type: "REMOVE_CAR",
    payload: carId,
  };
};

export { addCar, addCarYear, removeCar,};