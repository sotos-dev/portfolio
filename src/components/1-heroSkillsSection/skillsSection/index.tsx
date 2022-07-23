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
  return (
    <>
      <section className={`${styles["skills-section"]} spacer`}>
        <SectionTitle text='My Stack_' />
        <p className={styles["under-title"]}>
          Here are the technologies I have been working with recently
        </p>
        <Skills skillsData={skillsData} />
        <h3 className={styles["other-skills"]}>Other Skills</h3>
        <OtherSkills otherSkills={otherSkills} />
      </section>
    </>
  )
}

export default SkillsSection
