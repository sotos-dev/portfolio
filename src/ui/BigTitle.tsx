import styles from "./bigTitle.module.scss"

export interface IBigTitleProps {
  text: string
}

const BigTitle = ({ text }: IBigTitleProps) => {
  return (
    <>
      <h1 className={styles["big-title"]}>{text}</h1>
    </>
  )
}

export default BigTitle
