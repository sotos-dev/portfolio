import styles from "./overTitle.module.scss"

export interface IOverTitleProps {
  text: string
}

const OverTitle = ({ text }: IOverTitleProps) => {
  return (
    <>
      <h3 className={styles["over-title"]}>{text}</h3>
    </>
  )
}

export default OverTitle
