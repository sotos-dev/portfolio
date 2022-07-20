import HeroSkillsSection from "./components/1-heroSkillsSection"
import { useTheme } from "./context/ThemeContext"

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
      </div>
    </>
  )
}

export default App
