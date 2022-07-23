import React, { useContext, useState } from "react"
import { createContext } from "react"
import LogoWhite from "../assets/images/logo-white.png"
import LogoBlack from "../assets/images/logo-black.png"
import TopBgLight from "../assets/images/top-section-light.jpg"
import TopBgDark from "../assets/images/top-section-dark.jpg"
// Themes
export const themes = {
  light: {
    backgroundColor: "#f2f4fd",
    color: "#1e293b",
    skillsBg: "#fff",
    skillsOutline: "#D9D9D9",
    transition: "300ms",
    sunBg: "#2a5fe4",
    sunColor: "white",
    moonBg: "",
    moonColor: "#1e293b",
    logo: LogoBlack,
    heroBg: TopBgLight,
    mobileNav: "#83cbff",
  },
  dark: {
    backgroundColor: "#0b1736",
    color: "#fff",
    skillsBg: "#202e51",
    skillsOutline: "#415487",
    transition: "300ms",
    sunBg: "",
    sunColor: "white",
    moonBg: "#f2f4fd",
    moonColor: "#1e293b",
    logo: LogoWhite,
    heroBg: TopBgDark,
    mobileNav: "#83cbff",
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
    theme,
    isLight,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider
