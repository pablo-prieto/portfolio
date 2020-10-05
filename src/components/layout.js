import React, { useState } from 'react';
import Navbar from "./navbar"
import useWindowWidth from "./windowWidth"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/globalStyle"
import { SiteMetadata } from "./site-metadata"
import { theme } from "../theme"

export default function Layout({ children }) {

  const [open, setOpen] = useState(false);
  const windowWidth = useWindowWidth()

  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <SiteMetadata >
          <body className={open ? 'blur' : ''}/>
        </SiteMetadata>
        {/* Tells the entire project which classes to use */}
        <GlobalStyle />
        <div id="main">
          <Navbar windowWidth={windowWidth} open={open} setOpen={setOpen}></Navbar>
          <div id="content" className="content">{children}</div>
        </div>
      </>
    </ThemeProvider>
  )
}
