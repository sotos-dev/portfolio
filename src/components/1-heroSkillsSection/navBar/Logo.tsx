import LogoWhite from "../../../assets/images/logo-black.png"
import LogoBlack from "../../../assets/images/logo-white.png"
import { useTheme } from "../../../context/ThemeContext"

import "./logo.scss"

const Logo = () => {
  const { theme } = useTheme()

  return (
    <>
      <div className='logo-wrapper'>
        <img
          src={theme.logo}
          alt='Sotos Logo'
          className='logo'
          style={{ transition: theme.transition }}
        />
      </div>
    </>
  )
}

export default Logo
