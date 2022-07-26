import HeroSkillsSection from "./components/1-heroSkillsSection"
import { useTheme } from "./context/ThemeContext"
import ProjectsSection from "./components/2-projectsSection"
import GetInTouchSection from "./components/4-getInTouchSection"
import Footer from "./components/5-footer"
import SideElements from "./components/6-sideElements"

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
        <GetInTouchSection />
        <Footer />
        <SideElements />
      </div>
    </>
  )
}

export default App
