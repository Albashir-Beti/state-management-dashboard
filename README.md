# State Management Dashboard

## Project Overview

The State Management Dashboard is a React application developed to demonstrate how state can be managed effectively using the **React Context API** and **Redux Toolkit**.

The application provides a simple task management system where users can add tasks, mark tasks as completed, delete tasks, view task statistics, and switch between light and dark themes.

## Learning Objectives

The main objectives of this project are to:

- Understand state management in React.
- Learn how to use the Context API.
- Understand Redux Toolkit and its core concepts.
- Practise managing shared application state.
- Understand how components communicate with a central Redux store.
- Implement custom React hooks.

## Technologies Used

- React.js
- JavaScript (ES6+)
- Redux Toolkit
- React Redux
- Context API
- HTML5
- CSS3
- Vite
- Git and GitHub
- Netlify

## Application Features

- **Add Tasks:** Create new tasks.
- **Complete Tasks:** Mark tasks as completed or undo completion.
- **Delete Tasks:** Remove tasks from the task list.
- **Task Statistics:** View total, completed, and pending tasks.
- **Theme Switching:** Switch between light and dark modes.
- **Responsive Design:** Access the dashboard on different screen sizes.

## State Management Implementation

### 1. React Context API

The Context API is used to manage the application's theme.

It allows components to access the current theme and the theme-toggle function without passing props through multiple component levels.

A custom hook called `useTheme` is also implemented to make accessing the theme context easier.

### 2. Redux Toolkit

Redux Toolkit manages the application's task state.

The implementation includes:

- **Store:** Holds the central application state.
- **Slice:** Defines the task state and reducers.
- **Actions:** Represent operations such as adding, completing, and deleting tasks.
- **useSelector:** Reads task data from the Redux store.
- **useDispatch:** Dispatches actions to update the store.

## Project Structure

```text
src/
├── app/
│   └── store.js
├── components/
│   ├── Header.jsx
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   └── TaskStats.jsx
├── context/
│   ├── AppThemeContext.jsx
│   ├── ThemeContext.jsx
│   └── useTheme.js
├── features/
│   └── tasks/
│       └── taskSlice.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Installation and Setup

To run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/Albashir-Beti/state-management-dashboard.git
```

2. Navigate into the project directory:

```bash
cd state-management-dashboard
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL displayed in your terminal.

## Testing and Build

Run ESLint to check the code:

```bash
npm run lint
```

Build the application for production:

```bash
npm run build
```

## Live Demo

https://state-management-dashboard.netlify.app/

## GitHub Repository

https://github.com/Albashir-Beti/state-management-dashboard

## Conclusion

This project provided practical experience with React state management using both the Context API and Redux Toolkit. It improved my understanding of shared state, reducers, actions, custom hooks, and component communication in React.
