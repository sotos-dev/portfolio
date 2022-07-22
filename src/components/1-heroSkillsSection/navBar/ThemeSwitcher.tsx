import styles from "./themeSwitcher.module.scss"
import { useTheme } from "../../../context/ThemeContext"
import { BsMoon, BsSun } from "react-icons/bs"

export interface IThemeSwitcherProps {}

const ThemeSwitcher = ({}: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <div
        className={styles["switch-wrapper"]}
        style={{
          border: `1px solid ${theme.color}`,
          transition: theme.transition,
        }}>
        <BsSun
          className={styles["icons"]}
          style={{
            backgroundColor: theme.sunBg,
            color: theme.sunColor,
            transition: theme.transition,
          }}
          onClick={toggleTheme}
        />
        <BsMoon
          className={styles["icons"]}
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
