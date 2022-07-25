import { projectsInfo } from "../../utils/data"
import Container from "../../ui/Container"
import OverTitle from "../../ui/OverTitle"
import SectionTitle from "../../ui/SectionTitle"
import ProjectCard from "./projectCard"
import styles from "./index.module.scss"

export interface IProjectsSectionProps {}

const ProjectsSection = ({}: IProjectsSectionProps) => {
  return (
    <>
      <section className={styles["projects-section"]}>
        <Container>
          <div className={styles["projects-wrapper"]}>
            <OverTitle text='My Work' />
            <SectionTitle text='Some Things I’ve Built_' />
            <ProjectCard projectsInfo={projectsInfo} />
          </div>
        </Container>
      </section>
    </>
  )
}

export default ProjectsSection
