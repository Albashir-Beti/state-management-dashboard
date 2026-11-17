
import { useTheme } from "../context/useTheme";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div>
        <h1>State Management Dashboard</h1>
        <p>Manage your tasks with React State Management</p>
      </div>

      <button className="theme-button" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
}

export default Header;
