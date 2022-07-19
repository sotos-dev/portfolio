import React, { useContext, useState } from "react"
import "./app.scss"
import { useTheme } from "./context/ThemeContext"

const App: React.FC = () => {
  const { isLight, theme, toggleTheme, setIsLight } = useTheme()
  const [moveButton, setMoveButton] = useState(false)

  const changeTheme = (): void => {
    setMoveButton((prev) => (prev = !prev))
    toggleTheme()
  }

  return (
    <>
      <div
        className='app-wrapper'
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          transition: theme.transition,
        }}>
        <h1>Testing</h1>
        <label className='switch-wrapper'>
          <input
            type='checkbox'
            className={`${moveButton ? "checkboxMoved" : ""}checkbox`}
            onClick={toggleTheme}
          />
        </label>
      </div>
    </>
  )
}

export default App
