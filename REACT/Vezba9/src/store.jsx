import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import carReducer from "./reducers/CarReducer";

export default configureStore({
  reducer: {
    cars: carReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});