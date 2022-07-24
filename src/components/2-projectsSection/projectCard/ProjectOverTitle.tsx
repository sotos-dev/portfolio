import styles from "./projectOverTitle.module.scss"

export interface IProjectOverTitleProps {
  text: string
}

const ProjectOverTitle = ({ text }: IProjectOverTitleProps) => {
  return (
    <>
      <p className={styles["over-title"]}>{text}</p>
    </>
  )
}

export default ProjectOverTitle
