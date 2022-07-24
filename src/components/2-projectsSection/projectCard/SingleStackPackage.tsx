import { useTheme } from "../../../context/ThemeContext"
import styles from "./singleStackPackage.module.scss"

export interface ISingleStackPackageProps {
  text: string
}

const SingleStackPackage = ({ text }: ISingleStackPackageProps) => {
  const { theme } = useTheme()
  return (
    <>
      <p
        style={{
          border: `1px solid ${theme.skillsOutline}`,
          backgroundColor: theme.projectCardTech,
        }}
        className={styles["item"]}>
        {text}
      </p>
    </>
  )
}

export default SingleStackPackage
