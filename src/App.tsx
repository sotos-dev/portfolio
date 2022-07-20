import React, { useState } from "react"
import "./app.scss"
import { useTheme } from "./context/ThemeContext"
import { BsMoon, BsSun } from "react-icons/bs"

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

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
        <div
          className='switch-wrapper'
          style={{ border: `1px solid ${theme.color}` }}>
          <BsSun
            className='icons sun'
            style={{ backgroundColor: theme.sunBg, color: theme.sunColor }}
            onClick={toggleTheme}
          />
          <BsMoon
            className='icons moon'
            onClick={toggleTheme}
            style={{ backgroundColor: theme.moonBg, color: theme.moonColor }}
          />
        </div>
      </div>
    </>
  )
}

export default App
