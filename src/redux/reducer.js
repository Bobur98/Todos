import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  todos: [],
};

const addTodoReducer = createSlice({
  name: "todos",
  intialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
      // console.log(intialState);
    },
  },
});

export const { addTodos } = addTodoReducer.actions;
export const reducers = addTodoReducer.reducer;
