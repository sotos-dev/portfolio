import SandwichButton from "./SandwichButton"
import Logo from "./Logo"
import MobileLinksArea from "./MobileLinksArea"
import LinksArea from "./LinksArea"
import ThemeSwitcher from "./ThemeSwitcher"
import { navLinks } from "../../../utils/data"
import styles from "./index.module.scss"
import { useEffect, useRef, useState } from "react"

const Navbar = () => {
  const [isNavButtonOpen, setIsNavButtonOpen] = useState(false)
  const menuButton = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener("click", (event: any) => {
      event.stopPropagation()
      if (isNavButtonOpen === true) {
        // setIsNavButtonOpen(false)
        console.log(event.target)
      }
    })
  }, [])

  return (
    <>
      <header id='home' className={styles["navbar-wrapper"]}>
        {/* Hides over [this many pixels] */}
        <div
          ref={menuButton}
          style={{ zIndex: "30" }}
          onClick={() => {
            setIsNavButtonOpen((prev) => (prev = !prev))
          }}>
          <SandwichButton />
        </div>
        {/* Logo */}
        <Logo />
        {/* Hides over [this many pixels] */}
        <MobileLinksArea
          navLinks={navLinks}
          isNavButtonOpen={isNavButtonOpen}
        />
        {/* {/* Shows over [this many pixels] */}
        <LinksArea navLinks={navLinks} />
        {/* Theme Switcher */}
        <ThemeSwitcher />
      </header>
    </>
  )
}

export default Navbar
