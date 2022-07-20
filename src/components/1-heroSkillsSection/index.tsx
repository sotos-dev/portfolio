import { useTheme } from "../../context/ThemeContext"
import Container from "../../ui/Container"
import "./index.scss"
import Navbar from "./navBar"

export interface IHeroSkillsSectionProps {}

const HeroSkillsSection = ({}: IHeroSkillsSectionProps) => {
  const { theme } = useTheme()

  return (
    <>
      <section
        className='hero-section'
        style={{
          backgroundImage: `url(${theme.heroBg})`,
          transition: theme.transition,
        }}>
        <Container>
          <div className='hero-wrapper'>
            {/* Navbar */}
            <Navbar />
          </div>
        </Container>
      </section>
    </>
  )
}

export default HeroSkillsSection
