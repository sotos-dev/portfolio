import styles from "./projectPackages.module.scss"
import React from "react"
import SingleStackPackage from "./SingleStackPackage"

export interface IProjectPackagesProps {
  packages: {
    packageName: string
    packageId: string
  }[]
}

const ProjectPackages = ({ packages }: IProjectPackagesProps) => {
  return (
    <>
      <div className={styles["packages-wrapper"]}>
        {packages.map((item) => {
          return (
            <React.Fragment key={item.packageId}>
              <SingleStackPackage text={item.packageName} />
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}

export default ProjectPackages
