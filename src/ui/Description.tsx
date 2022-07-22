import styles from "./description.module.scss"

export interface IDescriptionProps {
  text: string
}

const Description = ({ text }: IDescriptionProps) => {
  return (
    <>
      <p className={styles["description"]}>{text}</p>
    </>
  )
}

export default Description
