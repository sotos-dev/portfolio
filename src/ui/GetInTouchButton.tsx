import styles from "./getInTouchButton.module.scss"

export interface IGetInTouchButtonsProps {
  text: string
  icon: string
  color: string
  bgColor: string
  link: string
}

const GetInTouchButtons = ({
  text,
  icon,
  bgColor,
  color,
  link,
}: IGetInTouchButtonsProps) => {
  return (
    <>
      <a
        href={link}
        target='_blank'
        className={styles["button-wrapper"]}
        style={{ backgroundColor: bgColor, color: color }}>
        <img src={icon} alt={icon} className={styles["icon"]} />
        <button className={styles["button"]}>{text}</button>
      </a>
    </>
  )
}

export default GetInTouchButtons
