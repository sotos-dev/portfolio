import Container from "../../ui/Container"
import GetInTouchButton from "./GetInTouchButton"
import SectionTitle from "../../ui/SectionTitle"
import styles from "./index.module.scss"
import GithubIcon from "../../assets/images/github.png"
import LinkedinIcon from "../../assets/images/linkedin.png"
import { useTheme } from "../../context/ThemeContext"

export interface IGetInTouchSectionProps {}

const GetInTouchSection = ({}: IGetInTouchSectionProps) => {
  const { theme } = useTheme()

  return (
    <>
      <section
        id='contact'
        className={styles["contact-section"]}
        style={{
          backgroundImage: `url(${theme.contactBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        <Container>
          <div className={styles["contact-wrapper"]}>
            <SectionTitle text='Get In Touch_' />
            <p className={styles["under-title"]}>
              Reach out on Github or connect with me on LinkedIn, I am online
              daily and always message away.
            </p>
            <div className={styles["button-flex"]}>
              <GetInTouchButton
                text='check out my github'
                icon={GithubIcon}
                bgColor='#fff'
                color='#2a5fe4'
                link='https://github.com/sotos-dev'
                borderColor='#2a5fe4'
              />
              <GetInTouchButton
                text='connect with me'
                icon={LinkedinIcon}
                bgColor='#2a5fe4'
                color='#fff'
                link='https://www.linkedin.com/in/sotirios-chatzopoulos-7bb889244/'
                borderColor='#2a5fe4'
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default GetInTouchSection
