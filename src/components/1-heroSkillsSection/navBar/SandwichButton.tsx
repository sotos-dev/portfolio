import { HiOutlineMenu } from "react-icons/hi"
import styles from "./sandwichButton.module.scss"

export interface IMobileNavButtonProps {}

const MobileNavButton = ({}: IMobileNavButtonProps) => {
  return (
    <>
      <div className={styles["menu-icon-wrapper"]}>
        <HiOutlineMenu className={styles["menu-icon"]} />
      </div>
    </>
  )
}

export default MobileNavButton
