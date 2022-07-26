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
  const menuButton = useRef<HTMLImageElement>(null)
  const refLink = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closeMenu = (e: any) => {
      console.log(e.target)

      if (e.target !== refLink.current && e.target !== menuButton.current) {
        setIsNavButtonOpen(false)
      }
    }

    document.body.addEventListener("click", closeMenu)

    return () => document.body.removeEventListener("click", closeMenu)
  }, [])

  return (
    <>
      <header id='home' className={styles["navbar-wrapper"]}>
        {/* Hides over [this many pixels] */}
        <SandwichButton
          setIsNavButtonOpen={setIsNavButtonOpen}
          menuButton={menuButton}
        />
        {/* Logo */}
        <Logo />
        {/* Hides over [this many pixels] */}
        <MobileLinksArea
          navLinks={navLinks}
          isNavButtonOpen={isNavButtonOpen}
          refLink={refLink}
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
