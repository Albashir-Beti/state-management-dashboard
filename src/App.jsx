
import { useTheme } from "./context/useTheme";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <Header />

        <main>
          <section className="welcome-section">
            <h2>Welcome to Your Dashboard</h2>
            <p>
              Manage your daily activities and track your
              progress with React State Management.
            </p>
          </section>

          <TaskStats />

          <section className="task-section">
            <h2>Add a New Task</h2>
            <TaskForm />
          </section>

          <TaskList />
        </main>

        <footer>
          <p>Built with React, Context API and Redux Toolkit.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
