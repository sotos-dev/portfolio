import { useTheme } from "../../../context/ThemeContext"
import SectionTitle from "../../../ui/SectionTitle"
import styles from "./index.module.scss"
import OtherSkills from "./OtherSkills"
import Skills from "./Skills"

// If you wanted to export the one interface
export interface ISkillsArea {
  skillName: string
  id: string
}
interface ISkillsSectionProps {
  skillsData: ISkillsArea[]
  otherSkills: ISkillsArea[]
}

const SkillsSection = ({ skillsData, otherSkills }: ISkillsSectionProps) => {
  const { theme } = useTheme()

  return (
    <>
      <section id='skills' className={`${styles["skills-section"]} spacer`}>
        <SectionTitle text='My Skills' />
        <p className={styles["under-title"]}>
          Skills I have been developing through the last 5 years.
        </p>
        <Skills skillsData={skillsData} />
        <h3 className={styles["other-skills"]}>Other Skills</h3>
        <OtherSkills otherSkills={otherSkills} />
        <div className={styles["image-wrapper"]}>
          <img
            className={styles["react-icon"]}
            src={theme.reactIcon}
            alt='react-icon'
          />
          <img
            className={styles["typescript-icon"]}
            src={theme.typescriptIcon}
            alt='react-icon'
          />
          <img
            className={styles["next-icon"]}
            src={theme.nextIcon}
            alt='react-icon'
          />
          <img
            className={styles["sass-icon"]}
            src={theme.sassIcon}
            alt='react-icon'
          />
          <img
            className={styles["tailwind-icon"]}
            src={theme.tailwindIcon}
            alt='react-icon'
          />
          <img
            className={styles["github-icon"]}
            src={theme.githubIcon}
            alt='react-icon'
          />
        </div>
      </section>
    </>
  )
}

export default SkillsSection
