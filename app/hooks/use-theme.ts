import { useEffect, useMemo, useState } from "react";

const ThemeProps = {
  key: "theme",
  light: "light",
  dark: "dark",
} as const;

type Theme = typeof ThemeProps.light | typeof ThemeProps.dark;

// Utility function to check if we are in the browser
const isClient = typeof window !== "undefined";

export const useTheme = (defaultTheme?: Theme) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (!isClient) return defaultTheme ?? ThemeProps.light; // Return default theme on the server

    const storedTheme = localStorage.getItem(ThemeProps.key) as Theme | null;
    return storedTheme || (defaultTheme ?? ThemeProps.light);
  });

  const isDark = useMemo(() => theme === ThemeProps.dark, [theme]);
  const isLight = useMemo(() => theme === ThemeProps.light, [theme]);

  const _setTheme = (newTheme: Theme) => {
    if (!isClient) return;

    localStorage.setItem(ThemeProps.key, newTheme);
    document.documentElement.classList.remove(ThemeProps.light, ThemeProps.dark);
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
  };

  const setLightTheme = () => _setTheme(ThemeProps.light);
  const setDarkTheme = () => _setTheme(ThemeProps.dark);
  const toggleTheme = () => (theme === ThemeProps.dark ? setLightTheme() : setDarkTheme());

  useEffect(() => {
    if (isClient) {
      _setTheme(theme);
    }
  }, []);

  return { theme, isDark, isLight, setLightTheme, setDarkTheme, toggleTheme };
};