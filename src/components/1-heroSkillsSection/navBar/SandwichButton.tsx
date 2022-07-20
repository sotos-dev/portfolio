import { HiOutlineMenu } from "react-icons/hi"
import "./sandwichButton.scss"

export interface IMobileNavButtonProps {}

const MobileNavButton = ({}: IMobileNavButtonProps) => {
  return (
    <>
      <div className='menu-icon-wrapper'>
        <HiOutlineMenu className='menu-icon' />
      </div>
    </>
  )
}

export default MobileNavButton
