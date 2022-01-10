import { Dispatch } from "react"

export enum ThemeName {
  covid = "covid",
  default = "default"
}

export type ThemeContextData = {
  state: {
    theme: ThemeName
  }
  dispatch: Dispatch<any>
}

export enum ThemeActions {
  TOGGLE_THEME = "TOGGLE_THEME"
}
