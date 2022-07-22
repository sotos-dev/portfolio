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
  const buttonRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <header className={styles["navbar-wrapper"]}>
        {/* Hides over [this many pixels] */}
        {/* <div ref={buttonRef}> */}
        <SandwichButton setIsNavButtonOpen={setIsNavButtonOpen} />
        {/* </div> */}
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
