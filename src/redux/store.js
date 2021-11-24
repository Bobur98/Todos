import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducer";

const store = configureStore({
  reducer: {
    todos: reducers,
  },
});

export default store;
