import { BiCopyright } from "react-icons/bi"
import { useTheme } from "../../context/ThemeContext"
import styles from "./index.module.scss"

export interface IFooterProps {}

const Footer = ({}: IFooterProps) => {
  const { theme } = useTheme()

  return (
    <>
      <footer
        className={styles["footer"]}
        style={{ backgroundColor: theme.footerBg }}>
        <BiCopyright />
        <p>{new Date().getFullYear()} sotos.dev</p>
      </footer>
    </>
  )
}

export default Footer
