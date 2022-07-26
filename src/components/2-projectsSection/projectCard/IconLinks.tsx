import styles from "./iconLinks.module.scss"
import { FiGithub, FiExternalLink } from "react-icons/fi"

export interface IIconLinksProps {
  githubLink: string
  websiteLink: string
}

const IconLinks = ({ githubLink, websiteLink }: IIconLinksProps) => {
  return (
    <>
      <div className={styles["icons-wrapper"]}>
        <a
          target='_blank'
          href={githubLink}
          title='Github'
          className={styles["links"]}>
          <FiGithub className={styles["link-icon"]} />
        </a>
        <a
          target='_blank'
          href={websiteLink}
          title='Website'
          className={styles["links"]}>
          <FiExternalLink className={styles["link-icon"]} />
        </a>
      </div>
    </>
  )
}

export default IconLinks
