import { useTheme } from "../../context/ThemeContext"
import { skillsData, otherSkills } from "../../utils/data"
import styles from "./index.module.scss"
import Container from "../../ui/Container"
import Navbar from "./navBar"
import HeroSection from "./heroSection"
import SkillsSection from "./skillsSection"

export interface IHeroSkillsSectionProps {}

const HeroSkillsSection = ({}: IHeroSkillsSectionProps) => {
  const { theme } = useTheme()

  return (
    <>
      <section
        className={`${styles["hero-section"]}`}
        style={{
          backgroundImage: `url(${theme.heroBg})`,
          transition: theme.transition,
        }}>
        <Container>
          <div className={styles["hero-wrapper"]}>
            {/* Navbar */}
            <Navbar />
            {/* Hero Section */}
            <HeroSection />
            {/* Skills Section */}
            <SkillsSection skillsData={skillsData} otherSkills={otherSkills} />
          </div>
        </Container>
      </section>
    </>
  )
}

export default HeroSkillsSection
