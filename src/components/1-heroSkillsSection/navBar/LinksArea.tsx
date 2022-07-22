import styles from "./linksArea.module.scss"

interface INavProps {
  navLinks: {
    linkName: string
    id: string
  }[]
}

const Nav = ({ navLinks }: INavProps) => {
  return (
    <>
      <nav className={styles["links-area-wrapper"]}>
        <ul className={styles["links-wrapper"]}>
          {navLinks.map((navLink) => {
            return (
              <li key={navLink.id}>
                <a href='/' className={styles["nav-link"]}>
                  {navLink.linkName}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Nav
