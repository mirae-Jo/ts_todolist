import { createSlice } from "@reduxjs/toolkit";
import type { Todo } from "../../../types.d.ts";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    delTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    switchTodo: (state, action) => {
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo;
      });
    },
  },
});

export const { addTodo, delTodo, switchTodo } = todoSlice.actions;
export default todoSlice.reducer;
