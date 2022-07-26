import { forwardRef } from "react"
import { useTheme } from "../../../context/ThemeContext"
import styles from "./sandwichButton.module.scss"

export interface IMobileNavButtonProps {
  menuButton: React.Ref<HTMLImageElement>
  setIsNavButtonOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavButton = forwardRef(
  ({ setIsNavButtonOpen, menuButton }: IMobileNavButtonProps) => {
    const { theme } = useTheme()

    return (
      <>
        <div className={styles["menu-icon-wrapper"]}>
          <img
            onClick={() => {
              setIsNavButtonOpen((prev) => (prev = !prev))
            }}
            src={theme.menuButton}
            alt='menu button'
            ref={menuButton}
            className={styles["menu-icon"]}
          />
          {/* <HiOutlineMenu  /> */}
        </div>
      </>
    )
  }
)

export default MobileNavButton
