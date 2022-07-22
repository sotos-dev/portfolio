import { HiOutlineMenu } from "react-icons/hi"
import styles from "./sandwichButton.module.scss"

export interface IMobileNavButtonProps {
  setIsNavButtonOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavButton = ({ setIsNavButtonOpen }: IMobileNavButtonProps) => {
  return (
    <>
      <div
        className={styles["menu-icon-wrapper"]}
        onClick={() => {
          setIsNavButtonOpen((prev) => (prev = !prev))
        }}>
        <HiOutlineMenu className={styles["menu-icon"]} />
      </div>
    </>
  )
}

export default MobileNavButton
