import { createContext } from "react";

export const initialThemeState = {
    theme: "",
    setTheme: () => null
}

const ThemeContext = createContext(initialThemeState);
export default ThemeContext;