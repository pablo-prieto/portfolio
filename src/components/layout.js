import React from "react"
import Navbar from "./navbar"
import useWindowWidth from "./windowWidth"
import { GlobalStyle } from "../styles/index"

export default function Layout({ children }) {
  const windowWidth = useWindowWidth()

  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      {/* Tells the entire project which classes to use */}
      <GlobalStyle />
      <div id="main" className="container">
        <Navbar windowWidth={windowWidth}></Navbar>
        <div className="content">{children}</div>
      </div>
    </>
  )
}
