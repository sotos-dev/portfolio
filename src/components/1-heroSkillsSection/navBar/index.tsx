import SandwichButton from "./SandwichButton"
import Logo from "./Logo"
import MobileLinksArea from "./MobileLinksArea"
import LinksArea from "./LinksArea"
import ThemeSwitcher from "./ThemeSwitcher"
import { navLinks } from "../../../utils/data"
import "./index.scss"

const Navbar = () => {
  return (
    <>
      <header className='navbar-wrapper'>
        {/* Hides over [this many pixels] */}
        <SandwichButton />
        {/* Logo */}
        <Logo />
        {/* Hides over [this many pixels] */}
        <MobileLinksArea navLinks={navLinks} />
        {/* {/* Shows over [this many pixels] */}
        <LinksArea navLinks={navLinks} />
        {/* Theme Switcher */}
        <ThemeSwitcher />
      </header>
    </>
  )
}

export default Navbar
