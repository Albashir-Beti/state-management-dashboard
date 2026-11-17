
import { createSlice } from "@reduxjs/toolkit";

// Initial task state
const initialState = {
  tasks: [
    {
      id: 1,
      title: "Learn React State Management",
      completed: false,
    },
    {
      id: 2,
      title: "Practise Redux Toolkit",
      completed: true,
    },
  ],
};

// Create the task slice
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Add a new task
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },

    // Toggle task completion
    toggleTask: (state, action) => {
      const task = state.tasks.find(
        (task) => task.id === action.payload
      );

      if (task) {
        task.completed = !task.completed;
      }
    },

    // Delete a task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },
  },
});

// Export actions
export const { addTask, toggleTask, deleteTask } =
  taskSlice.actions;

// Export reducer
export default taskSlice.reducer;
