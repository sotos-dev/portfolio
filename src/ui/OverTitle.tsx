export interface IOverTitleProps {
  text: string
}

const OverTitle = ({ text }: IOverTitleProps) => {
  return (
    <>
      <h3 className='over-title'>{text}</h3>
    </>
  )
}

export default OverTitle
