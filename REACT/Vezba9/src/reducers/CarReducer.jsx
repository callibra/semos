const initialState = {
  cars: [],
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CAR":
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case "ADD_CAR_YEAR":
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.payload.id
            ? { ...car, year: action.payload.year }
            : car
        ),
      };
    case "REMOVE_CAR":
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    default:
      return state;
  }
};

export default carReducer;