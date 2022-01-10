import React from "react"
import { render, fireEvent } from "@testing-library/react"

import { ThemeProvider } from "."

import Theme from "../../components/theme"

it("Successfully toggles theme.", () => {
  const { getByTestId, getByText } = render(
    <ThemeProvider>
      <Theme />
    </ThemeProvider>
  )

  expect(getByText("default")).toBeInTheDocument()

  fireEvent.click(getByTestId("toggle-theme"))

  expect(getByText("covid")).toBeInTheDocument()
})
