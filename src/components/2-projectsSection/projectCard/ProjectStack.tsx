import styles from "./projectStack.module.scss"
import React from "react"
import SingleStackPackage from "./SingleStackPackage"

export interface IProjectStackProps {
  stack: {
    stackName: string
    stackId: string
  }[]
}

const ProjectStack = ({ stack }: IProjectStackProps) => {
  return (
    <>
      <div className={styles["stack-wrapper"]}>
        {stack.map((item) => {
          return (
            <React.Fragment key={item.stackId}>
              <SingleStackPackage text={item.stackName} />
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}

export default ProjectStack
