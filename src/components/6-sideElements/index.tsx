import styles from "./index.module.scss"
import GithubIcon from "../../assets/images/github-side-icon.png"
import LinkedInIcon from "../../assets/images/linkedin-side-icon.png"

export interface ISideElementsProps {}

const SideElements = ({}: ISideElementsProps) => {
  return (
    <>
      <div className={styles["side-elements"]}>
        <a href='https://github.com/this-savannah' target='_blank'>
          <img src={GithubIcon} alt='github link' className={styles["links"]} />
        </a>
        <a
          href='https://www.linkedin.com/in/sotirios-chatzopoulos-7bb889244/'
          target='_blank'>
          <img
            src={LinkedInIcon}
            alt='linkedin link'
            className={styles["links"]}
          />
        </a>
        <div className={styles["vertical-line"]}></div>
      </div>
    </>
  )
}

export default SideElements
