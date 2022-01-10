import { createContext, useReducer, useContext } from "react"
import { ThemeName, ThemeContextData, ThemeActions } from "./types"

const initialState = {
  theme: ThemeName.default
}

export const themesContextDefaultValue: ThemeContextData = {
  state: initialState,
  dispatch: () => {}
}

export const ThemeContext = createContext<ThemeContextData>(
  themesContextDefaultValue
)

function themeReducer(state, action: { type: ThemeActions }) {
  switch (action.type) {
    case ThemeActions.TOGGLE_THEME: {
      const newTheme =
        state.theme === ThemeName.covid ? ThemeName.default : ThemeName.covid

      return { theme: newTheme }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState)
  const value = { state, dispatch }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}

/**
 * Note that i'm NOT exporting ThemeContext.
 * We only want one way to provide the context value and only one way to consume it.
 * This ensures people are using the context value the way it should be and it allows me to provide useful utilities for my consumers.
 */

export { ThemeProvider, useTheme, ThemeActions }
