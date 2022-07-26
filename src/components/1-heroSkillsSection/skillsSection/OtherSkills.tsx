import styles from "./otherSkills.module.scss"
import { ISkillsArea as IOtherSkills } from "../skillsSection"
import SingleSkill from "./SingleSkill"
import React from "react"

export interface IOtherSkillsProps {
  otherSkills: IOtherSkills[]
}

const OtherSkills = ({ otherSkills }: IOtherSkillsProps) => {
  return (
    <>
      <div className={styles["skills-wrapper"]}>
        {otherSkills.map((skill) => {
          return (
            <React.Fragment key={skill.id}>
              <SingleSkill skill={skill} />
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}

export default OtherSkills
