
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";

// Create the Redux Store
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
