import React from "react"
import { ISkillsArea as ISkills } from "."
import SingleSkill from "./SingleSkill"
import styles from "./skills.module.scss"

interface ISkillsProps {
  skillsData: ISkills[]
}

const Skills = ({ skillsData }: ISkillsProps) => {
  return (
    <>
      <div className={styles["skills-wrapper"]}>
        {skillsData.map((skill) => {
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

export default Skills
