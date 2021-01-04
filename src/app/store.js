import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
// And use redux-batch as an example of adding enhancers
import { reduxBatch } from "@manaflair/redux-batch";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/users/userSlice";

const reducer = {
  counter: counterReducer,
  user: userReducer,
};

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // NODE_ENV: process.env.NODE_ENV !== "production",
  // enhancers: [reduxBatch],
});
