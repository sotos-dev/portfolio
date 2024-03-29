import React, { useContext, useState } from "react"
import { createContext } from "react"
import {
  NextLight,
  NextDark,
  ReactLight,
  ReactDark,
  GithubDark,
  GithubLight,
  SassDark,
  SassLight,
  TailwindDark,
  TailwindLight,
  TypescriptDark,
  TypescriptLight,
  LogoWhite,
  LogoBlack,
  TopBgDark,
  TopBgLight,
  HeroGraphicLight,
  HeroGraphicDark,
  ContactLight,
  ContactDark,
  MenuButtonLight,
  MenuButtonDark,
} from "../utils/images"
// Themes
export const themes = {
  light: {
    backgroundColor: "#fff",
    color: "#1e293b",
    skillsBg: "#fff",
    skillsOutline: "#D9D9D9",
    transition: "300ms",
    heroGraphic: HeroGraphicLight,
    sunBg: "#2a5fe4",
    sunColor: "#fff",
    moonBg: "",
    moonColor: "#1e293b",
    logo: LogoBlack,
    heroBg: TopBgLight,
    mobileNav: "#fff",
    reactIcon: ReactLight,
    nextIcon: NextLight,
    tailwindIcon: TailwindLight,
    sassIcon: SassLight,
    typescriptIcon: TypescriptLight,
    githubIcon: GithubLight,
    projectCardBg: "#fff",
    projectCardTech: "#fff",
    contactBg: ContactLight,
    footerBg: "#eceef7",
    sideLine: "rgba(0,0,0,0.3)",
    projectIcon: "rgba(0,0,0, 0.8)",
    menuButton: MenuButtonLight,
  },
  dark: {
    backgroundColor: "#101C3C",
    color: "#fff",
    skillsBg: "#202e51",
    skillsOutline: "#415487",
    transition: "300ms",
    heroGraphic: HeroGraphicDark,
    sunBg: "",
    sunColor: "white",
    moonBg: "#f2f4fd",
    moonColor: "#1e293b",
    logo: LogoWhite,
    heroBg: TopBgDark,
    mobileNav: "#202E51",
    reactIcon: ReactDark,
    nextIcon: NextDark,
    tailwindIcon: TailwindDark,
    sassIcon: SassDark,
    typescriptIcon: TypescriptDark,
    githubIcon: GithubDark,
    projectCardBg: "#202e51",
    projectCardTech: "#35456F",
    contactBg: ContactDark,
    footerBg: "#202E51",
    sideLine: "rgba(255,255,255, 0.8)",
    projectIcon: "#fff",
    menuButton: MenuButtonDark,
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
