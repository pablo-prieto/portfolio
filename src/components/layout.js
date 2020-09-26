import React from "react"
import { Link } from "gatsby"
// import { IconLogo } from "@components"
import IconLogo from "./logo"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <a href="/" aria-label="home">
          <IconLogo />
        </a>
        <ul style={{ listStyle: `none`, float: `right`, width: `100%` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/#about">About</ListLink>
          <ListLink to="/#contact">Contact</ListLink>
          <ListLink to="/#aboutCSS">CSS Modules</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
