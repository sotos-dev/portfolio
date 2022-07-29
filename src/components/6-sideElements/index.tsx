import styles from "./index.module.scss"
import { FiLinkedin, FiGithub } from "react-icons/fi"
import { useTheme } from "../../context/ThemeContext"

export interface ISideElementsProps {}

const SideElements = ({}: ISideElementsProps) => {
  const { theme } = useTheme()

  return (
    <>
      <div className={styles["side-elements"]}>
        <a href='https://github.com/sotos-dev' target='_blank'>
          <FiGithub className={styles["links"]} />
        </a>
        <a
          href='https://www.linkedin.com/in/sotirios-chatzopoulos-7bb889244/'
          target='_blank'>
          <FiLinkedin className={styles["links"]} />
        </a>
        <div
          className={styles["vertical-line"]}
          style={{ backgroundColor: theme.sideLine }}></div>
      </div>
    </>
  )
}

export default SideElements
