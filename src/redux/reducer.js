import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, payload) => {
      console.log(payload);
      state.todos.push({
        id: Math.floor(Math.random() * 1000),
        item: payload.payload,
        completed: false,
      });
    },
  },
});

export const { addTodos } = addTodoReducer.actions;
export default addTodoReducer.reducer;
