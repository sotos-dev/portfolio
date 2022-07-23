import styles from "./otherSkills.module.scss"
import { ISkillsArea as IOtherSkills } from "../skillsSection"
import SingleSkill from "./SingleSkill"

export interface IOtherSkillsProps {
  otherSkills: IOtherSkills[]
}

const OtherSkills = ({ otherSkills }: IOtherSkillsProps) => {
  return (
    <>
      <div className={styles["skills-wrapper"]}>
        {otherSkills.map((skill) => {
          return <SingleSkill skill={skill} />
        })}
      </div>
    </>
  )
}

export default OtherSkills
