import styles from "./index.module.scss"
import OverTitle from "../../../ui/OverTitle"
import BigTitle from "../../../ui/BigTitle"
import Description from "../../../ui/Description"
import TsIcon from "../../../assets/images/typescript.png"
import BracesIcon from "../../../assets/images/curly-braces.png"
import TagIcon from "../../../assets/images/tag.png"
import { useTheme } from "../../../context/ThemeContext"

export interface IHeroSectionProps {}

const HeroSection = ({}: IHeroSectionProps) => {
  const { theme } = useTheme()

  return (
    <>
      <section className={`${styles["hero-section"]} spacer`}>
        {/* Content Area */}
        <div className={styles["hero-content"]}>
          <OverTitle text='Hi, my name is Sotirios' />
          <BigTitle text='I design and build things for the web.' />
          <Description
            text="I am a UX/UI Designer and front-end Developer who focuses on creating products that provide real value to people all over the world."
          />
          <a href='#work'>
            <button className={styles["see-work-button"]}>See my work</button>
          </a>
        </div>
        {/* Image Area */}
        <div className={styles["hero-images"]}>
          <img
            src={theme.heroGraphic}
            alt='hero graphic'
            className={styles["main-graphic"]}
          />
          <img
            src={TsIcon}
            alt='typescript icon'
            className={styles["ts-icon"]}
          />
          <img
            src={BracesIcon}
            alt='curly braces icon'
            className={styles["braces-icon"]}
          />
          <img src={TagIcon} alt='tag icon' className={styles["tag-icon"]} />
        </div>
      </section>
    </>
  )
}

export default HeroSection
