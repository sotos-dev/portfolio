import { useTheme } from "../../../context/ThemeContext"
import Logo from "./Logo"
import styles from "./MobileLinksArea.module.scss"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { forwardRef } from "react"

export interface IMobileLinksAreaProps {
  navLinks: {
    linkName: string
    id: string
    destination: string
  }[]
  isNavButtonOpen: boolean
  refLink: React.Ref<HTMLDivElement>
}

const MobileLinksArea = forwardRef(
  ({ navLinks, isNavButtonOpen, refLink }: IMobileLinksAreaProps) => {
    const { theme } = useTheme()

    return (
      <>
        <nav
          ref={refLink}
          style={{ backgroundColor: theme.mobileNav }}
          className={`${
            isNavButtonOpen
              ? `${styles["links-area-wrapper"]} ${styles["links-area-wrapper-active"]}`
              : styles["links-area-wrapper"]
          }`}>
          <div className={styles["logo-area"]}>
            <div className={styles["logo"]}>
              <Logo />
            </div>
            <div
              style={{ backgroundColor: theme.sideLine }}
              className={styles["divider-line"]}></div>
          </div>
          <ul className={styles["links-wrapper"]}>
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <a href={navLink.destination} className={styles["nav-links"]}>
                    {navLink.linkName}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className={styles["social-links"]}>
            <a target='_blank' href='https://github.com/this-savannah'>
              <FiGithub />
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/sotirios-chatzopoulos-7bb889244/'>
              <FiLinkedin />
            </a>
          </div>
        </nav>
      </>
    )
  }
)

export default MobileLinksArea
