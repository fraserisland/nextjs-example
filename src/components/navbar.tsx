import React from "react"
import Link from "next/link"
import { Theme } from "."

const Navbar: React.FC = () => {
  return (
    <ul>
      <Link href={`/`}>home</Link>
      <br />
      <Link href={`/covid/countries`}>countries</Link>
      <Theme />
    </ul>
  )
}

export default Navbar
