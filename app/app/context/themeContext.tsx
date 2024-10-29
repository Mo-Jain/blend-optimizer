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

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem("isDarkTheme");
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", `true`);
      document.body.classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const storedTheme = JSON.parse(localStorage.getItem("isDarkTheme")!);
      if (storedTheme) {
        document.body.classList.add("dark");
      }
      setIsDarkTheme(storedTheme);
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
