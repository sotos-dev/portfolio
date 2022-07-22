import { useTheme } from "../../context/ThemeContext"
import Container from "../../ui/Container"
import HeroSection from "./heroSection"
import styles from "./index.module.scss"
import Navbar from "./navBar"

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
          </div>
        </Container>
      </section>
    </>
  )
}

export default HeroSkillsSection
