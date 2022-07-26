import styles from "./iconLinks.module.scss"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { useTheme } from "../../../context/ThemeContext"

export interface IIconLinksProps {
  githubLink: string
  websiteLink: string
}

const IconLinks = ({ githubLink, websiteLink }: IIconLinksProps) => {
  const { theme } = useTheme()

  return (
    <>
      <div className={styles["icons-wrapper"]}>
        <a
          target='_blank'
          href={githubLink}
          title='Github'
          className={styles["links"]}>
          <FiGithub
            style={{ color: theme.projectIcon }}
            className={styles["link-icon"]}
          />
        </a>
        <a
          target='_blank'
          href={websiteLink}
          title='Website'
          className={styles["links"]}>
          <FiExternalLink
            style={{ color: theme.projectIcon }}
            className={styles["link-icon"]}
          />
        </a>
      </div>
    </>
  )
}

export default IconLinks
