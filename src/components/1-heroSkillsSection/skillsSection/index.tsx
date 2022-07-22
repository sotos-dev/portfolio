import SectionTitle from "../../../ui/SectionTitle"
import styles from "./index.module.scss"

// If you wanted to export the one interface
export interface ISkills {
  skillName: string
  id: string
}
interface ISkillsSectionProps {
  skillsData: ISkills[]
  otherSkills: ISkills[]
}

const SkillsSection = ({ skillsData, otherSkills }: ISkillsSectionProps) => {
  return (
    <>
      <section className={`${styles["skills-section"]} spacer`}>
        <SectionTitle text='My Skills_' />
        <p className={styles["under-title"]}>
          Here are a few technologies I’ve been working with recently
        </p>
        <SkillsArea />
      </section>
    </>
  )
}

export default SkillsSection
