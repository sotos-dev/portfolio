import styles from ".skills.module.scss"

export interface ISkillsProps {
  skill: string
}

const Skills = ({ skill }: ISkillsProps) => {
  return (
    <>
      <div className='skill'>{skill}</div>
    </>
  )
}

export default Skills
