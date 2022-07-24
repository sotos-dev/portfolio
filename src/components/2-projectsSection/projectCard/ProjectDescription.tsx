import styles from "./projectDescription.module.scss"

export interface IProjectDescriptionProps {
  text: string
}

const ProjectDescription = ({ text }: IProjectDescriptionProps) => {
  return (
    <>
      <p className={styles["project-description"]}>{text}</p>
    </>
  )
}

export default ProjectDescription
