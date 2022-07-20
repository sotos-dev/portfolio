import "./linksArea.scss"

import { IMobileLinksAreaProps as INavProps } from "../navBar/MobileLinksArea"

const Nav = ({ navLinks }: INavProps) => {
  return (
    <>
      <nav className='links-area-wrapper'>
        <ul>
          {navLinks.map((navLink) => {
            return (
              <li key={navLink.id}>
                <a href='/'>{navLink.linkName}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Nav
