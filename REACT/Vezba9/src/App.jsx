import React from "react";
import CarComponent from "./components/CarComponent";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Car App</h1>
        <CarComponent />
      </div>
    </Provider>
  );
};

export default App;