import React, { useState, useEffect } from "react";
import ThemeContext, {initialThemeState} from './ThemeContext.utils';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialThemeState.theme);

  useEffect(() => {
    setTheme("dark");
  }, []);

  useEffect(() => {
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${theme}`);
  },[theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
