import styles from "./sectionTitle.module.scss"

export interface ISectionTitleProps {
  text: string
}

const SectionTitle = ({ text }: ISectionTitleProps) => {
  return (
    <>
      <h2 className={styles["section-title"]}>{text}</h2>
    </>
  )
}

export default SectionTitle
