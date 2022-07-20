import "./themeSwitcher.scss"
import { useTheme } from "../../../context/ThemeContext"
import { BsMoon, BsSun } from "react-icons/bs"

export interface IThemeSwitcherProps {}

const ThemeSwitcher = ({}: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <div
        className='switch-wrapper'
        style={{
          border: `1px solid ${theme.color}`,
          transition: theme.transition,
        }}>
        <BsSun
          className='icons sun'
          style={{
            backgroundColor: theme.sunBg,
            color: theme.sunColor,
            transition: theme.transition,
          }}
          onClick={toggleTheme}
        />
        <BsMoon
          className='icons moon'
          onClick={toggleTheme}
          style={{
            backgroundColor: theme.moonBg,
            color: theme.moonColor,
            transition: theme.transition,
          }}
        />
      </div>
    </>
  )
}

export default ThemeSwitcher
