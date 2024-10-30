"use client"

import { createContext, ReactElement, useEffect, useState } from "react";

const MyThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | JSX.Element[];
}

export function MyThemeContextProvider(
  props: ThemePropsInterface
): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    initialThemeHandler();
  }, []);

  useEffect(() => {
    // Apply the theme class directly to the <body> element based on isDarkTheme state
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  function initialThemeHandler(): void {
    const storedTheme = localStorage.getItem("isDarkTheme");
    if (storedTheme === null) {
      localStorage.setItem("isDarkTheme", JSON.stringify(true));
      setIsDarkTheme(true);
    } else {
      setIsDarkTheme(JSON.parse(storedTheme));
    }
  }

  function toggleThemeHandler(): void {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.body.classList.toggle("dark");
    localStorage.setItem("isDarkTheme", JSON.stringify(newTheme));
  }

  return (
    <MyThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {props.children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeContext;
