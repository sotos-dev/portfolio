import styles from "./projectTitle.module.scss"

export interface IProjectTitleProps {
  text: string
}

const ProjectTitle = ({ text }: IProjectTitleProps) => {
  return (
    <>
      <h3 className={styles["project-title"]}>{text}</h3>
    </>
  )
}

export default ProjectTitle
