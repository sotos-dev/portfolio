import { useTheme } from "../../../context/ThemeContext"
import styles from "./logo.module.scss"

const Logo = () => {
  const { theme } = useTheme()

  return (
    <>
      <div className={styles["logo-wrapper"]}>
        <img
          src={theme.logo}
          alt='Sotos Logo'
          className={styles["logo"]}
          style={{ transition: theme.transition }}
        />
      </div>
    </>
  )
}

export default Logo
