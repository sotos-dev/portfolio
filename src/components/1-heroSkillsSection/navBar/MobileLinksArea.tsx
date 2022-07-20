import "./mobileLinksArea.scss"

export interface IMobileLinksAreaProps {
  navLinks: {
    linkName: string
    id: string
  }[]
}

const MobileLinksArea = ({ navLinks }: IMobileLinksAreaProps) => {
  return (
    <>
      <nav className='mobile-links-area-wrapper'>
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

export default MobileLinksArea
