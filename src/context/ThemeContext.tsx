import React, { useContext, useState } from "react"
import { createContext } from "react"
// Themes
export const themes = {
  light: {
    backgroundColor: "#f2f4fd",
    color: "#1e293b",
    skillsBg: "#fff",
    transition: "300ms",
  },
  dark: {
    backgroundColor: "#0b1736",
    color: "#fff",
    skillsBg: "#202e51",
    transition: "300ms",
  },
}

// Interface
interface IThemeContextProviderProps {
  children: React.ReactNode
}

// Create context
export const ThemeContext = createContext<any>(null)
// Use context here and export a hook for it
export const useTheme = () => {
  return useContext(ThemeContext)
}

// Function component
const ThemeContextProvider = ({ children }: IThemeContextProviderProps) => {
  // State
  const [isLight, setIsLight] = useState<boolean>(true)
  const theme = isLight ? themes.light : themes.dark
  const toggleTheme = (): void => {
    setIsLight(!isLight)
  }

  const values = {
    isLight,
    setIsLight,
    theme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider
