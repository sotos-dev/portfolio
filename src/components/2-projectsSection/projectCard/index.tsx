import React from "react"
import { useTheme } from "../../../context/ThemeContext"
import IconLinks from "./IconLinks"
import styles from "./index.module.scss"
import ProjectDescription from "./ProjectDescription"
import ProjectOverTitle from "./ProjectOverTitle"
import ProjectPackages from "./ProjectPackages"
import ProjectStack from "./ProjectStack"
import ProjectTitle from "./ProjectTitle"

interface ProjectCardProps {
  name: string
  overTitle: string
  description: string
  image: string
  id: string
  stackUsed: {
    stackName: string
    stackId: string
  }[]
  packagesUsed: {
    packageName: string
    packageId: string
  }[]
  githubLink: string
  websiteLink: string
}

export interface IProjectCardProps {
  projectsInfo: ProjectCardProps[]
}

const ProjectCard = ({ projectsInfo }: IProjectCardProps) => {
  const { theme } = useTheme()

  return (
    <>
      <div className={styles["project-cards-wrapper"]}>
        {projectsInfo.map((project) => {
          return (
            <React.Fragment key={project.id}>
              <div
                className={styles["project-card"]}
                style={{ backgroundColor: theme.projectCardBg }}>
                <div className={styles["card-image-wrapper"]}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className={styles["project-img"]}
                  />
                </div>
                <div className={styles["card-content"]}>
                  <IconLinks
                    githubLink={project.githubLink}
                    websiteLink={project.websiteLink}
                  />
                  <ProjectOverTitle text={project.overTitle} />
                  <ProjectTitle text={project.name} />
                  <ProjectDescription text={project.description} />
                  <p className={styles["tech-title"]}>Stack:</p>
                  <ProjectStack stack={project.stackUsed} />
                  <p className={styles["tech-title"]}>Packages:</p>
                  <ProjectPackages packages={project.packagesUsed} />
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}

export default ProjectCard
