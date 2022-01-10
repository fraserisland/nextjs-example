import React from "react"
import { Navbar } from "."

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <hr />
      {children}
    </>
  )
}

export default Layout
