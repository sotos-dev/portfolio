import styles from "./index.module.scss"
import OverTitle from "../../../ui/OverTitle"
import BigTitle from "../../../ui/BigTitle"
import Description from "../../../ui/Description"
import HeroImage from "../../../assets/images/main-graphic.png"
import TsIcon from "../../../assets/images/typescript.png"
import BracesIcon from "../../../assets/images/curly-braces.png"
import TagIcon from "../../../assets/images/tag.png"

export interface IHeroSectionProps {}

const HeroSection = ({}: IHeroSectionProps) => {
  return (
    <>
      <section className={`${styles["hero-section"]} spacer`}>
        {/* Content Area */}
        <div className={styles["hero-content"]}>
          <OverTitle text='Hi, my name is Sotos' />
          <BigTitle text='I build things for the web.' />
          <Description
            text="I'm a Front-end Developer who loves consistency and likes working with technologies and conventions that boost productivity and lead to better, faster and
          more maintainable results."
          />
          <button className={styles["see-work-button"]}>See my work</button>
        </div>
        {/* Image Area */}
        <div className={styles["hero-images"]}>
          <img
            src={HeroImage}
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
