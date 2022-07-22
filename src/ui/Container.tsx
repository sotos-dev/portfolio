import styles from "./container.module.scss"

export interface IContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: IContainerProps) => {
  return (
    <>
      <div className={styles["container"]}>{children}</div>
    </>
  )
}

export default Container
