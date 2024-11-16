"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

interface ThemeModeContextProps {
  darkMode: string;
  onToggleMode: (value: string) => void;
}

const ThemeModeContext = createContext<ThemeModeContextProps>({
  darkMode: "false",
  onToggleMode: () => {},
});

export const ThemeModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const prefersDarkMode = useMediaQuery(
    "(prefers-color-scheme: dark)"
  ).toString();

  const [darkMode, setDarkMode] = useState<string>("");

  useEffect(() => {
    const storedTheme =
      window.localStorage.getItem("darkMode") || prefersDarkMode;
    setDarkMode(storedTheme);
  }, [prefersDarkMode]);

  const onToggleMode = (value: string) => {
    setDarkMode(value);

    window.localStorage.setItem("darkMode", value);
  };

  return (
    <>
      <ThemeModeContext.Provider value={{ darkMode, onToggleMode }}>
        {children}
      </ThemeModeContext.Provider>
    </>
  );
};

export const useThemeModeContext = () => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within ThemeModeProvider");
  }
  return context;
};
