import { useContext } from "react";
import { ThemeContext } from "./AppThemeContext";

// Custom hook for accessing the theme context
export function useTheme() {
  return useContext(ThemeContext);
}