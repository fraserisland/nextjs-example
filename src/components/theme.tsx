import React from "react"
import { useTheme, ThemeActions } from "../context/theme"

function Theme() {
  const { state, dispatch } = useTheme()

  const toggleTheme = () => {
    dispatch({ type: ThemeActions.TOGGLE_THEME })
  }

  return (
    <div>
      <h2>{state.theme}</h2>
      <button data-testid="toggle-theme" onClick={toggleTheme}>
        toggle theme
      </button>
    </div>
  )
}

export default Theme
