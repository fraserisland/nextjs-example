import React from "react"

interface Props {
  title: string
  subtitle: string
}

const Header: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </header>
      <hr />
    </>
  )
}

export default Header
