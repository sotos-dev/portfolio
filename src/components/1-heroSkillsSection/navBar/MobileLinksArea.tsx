import { useTheme } from "../../../context/ThemeContext"
import styles from "./MobileLinksArea.module.scss"

export interface IMobileLinksAreaProps {
  navLinks: {
    linkName: string
    id: string
    divider: boolean
  }[]
  isNavButtonOpen: boolean
}

const MobileLinksArea = ({
  navLinks,
  isNavButtonOpen,
}: IMobileLinksAreaProps) => {
  const { theme } = useTheme()

  return (
    <>
      <nav
        style={{ backgroundColor: theme.mobileNav }}
        className={`${
          isNavButtonOpen
            ? `${styles["links-area-wrapper"]} ${styles["links-area-wrapper-active"]}`
            : styles["links-area-wrapper"]
        }`}>
        <ul className={styles["links-wrapper"]}>
          {navLinks.map((navLink) => {
            return (
              <li key={navLink.id}>
                <a href='/' className={styles["nav-links"]}>
                  {navLink.linkName}
                </a>
                {navLink.divider && <div className={styles["divider"]}></div>}
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default MobileLinksArea
