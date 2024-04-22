import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todoSlice";

const store = configureStore({
  reducer: { todos: todos },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
