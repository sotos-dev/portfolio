import HeroSkillsSection from "./components/1-heroSkillsSection"
import { useTheme } from "./context/ThemeContext"
import styles from "./app.module.scss"
import ProjectsSection from "./components/2-projectsSection"

const App = () => {
  const { theme } = useTheme()

  return (
    <>
      <div
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          transition: theme.transition,
        }}>
        <HeroSkillsSection />
        <ProjectsSection />
      </div>
    </>
  )
}

export default App
