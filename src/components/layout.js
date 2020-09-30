import React from "react"
import Navbar from "./navbar"
import useWindowWidth from "./windowWidth"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/globalStyle"
import { SiteMetadata } from "./site-metadata"
import { theme } from "../theme"

export default function Layout({ children }) {
  const windowWidth = useWindowWidth()

  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        {/* Tells the entire project which classes to use */}
        <SiteMetadata />
        <GlobalStyle />
        <div id="main" className="container">
          <Navbar windowWidth={windowWidth}></Navbar>
          <div className="content">{children}</div>
        </div>
      </>
    </ThemeProvider>
  )
}
