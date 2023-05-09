"use client";

import { createContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
type ThemeContextData = {
  toggleTheme: () => void;
  theme: Theme;
};

const getCurrentTheme = () => {
  return document.documentElement.dataset.theme! as Theme;
};

const getUserPref = () => {
  let userSetTheme = getCurrentTheme();

  if (localStorage.getItem("theme")) {
    userSetTheme = localStorage.getItem("theme") as Theme;
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    userSetTheme = "light";
  }

  return userSetTheme;
};

export const ThemeContext = createContext<ThemeContextData>({
  toggleTheme: () => {},
  theme: null!,
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    let themeToSet: Theme = theme === "light" ? "dark" : "light";
    setTheme(themeToSet);
    localStorage.setItem("theme", themeToSet);
  };

  useEffect(() => {
    let currTheme = getUserPref();
    document.documentElement.dataset.theme = currTheme;
    setTheme(currTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
