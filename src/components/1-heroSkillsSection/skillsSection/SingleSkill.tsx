import styles from "./singleSkill.module.scss"
import { ISkillsArea as ISkillProp } from "./index"
import { useTheme } from "../../../context/ThemeContext"

interface ISingleSkillProps {
  skill: ISkillProp
}

const SingleSkill = ({ skill }: ISingleSkillProps) => {
  const { theme } = useTheme()

  return (
    <>
      <div
        style={{
          backgroundColor: theme.skillsBg,
          border: `1px solid ${theme.skillsOutline}`,
        }}
        className={styles["skill"]}>
        {skill.skillName}
      </div>
    </>
  )
}

export default SingleSkill
