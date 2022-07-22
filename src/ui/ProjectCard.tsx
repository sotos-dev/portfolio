import styles from "./projectCard.module.scss"

export interface IProjectCardProps {
  title: string
  description: string
  skills: string[]
}

const ProjectCard = ({ title, description, skills }: IProjectCardProps) => {
  return (
    <>
      <section></section>
    </>
  )
}

export default ProjectCard
