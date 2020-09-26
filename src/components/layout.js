import React from "react"
import { Link } from "gatsby"
// import { IconLogo } from "@components"
// import IconLogo from "./logo"
import logo from "../../static/letterP.png"

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
    <div style={{ paddingLeft: "50px", paddingRight: "50px"}}>
      {/* <header style={{ marginBottom: `1.5rem` }}>
        <a href="/" aria-label="home">
          <IconLogo />
        </a>
      </header> */}
      <div className="row">
          <div>
            <a href="/" aria-label="home2" float="left" className="col-sm-2">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </div>
          <div>
            <ul style={{ listStyle: `none`, width: `100%`, paddingTop: "15px" }}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/#about">About</ListLink>
              <ListLink to="/#aboutCSS">Projects</ListLink>
              <ListLink to="/#contact">Contact</ListLink>
            </ul>
          </div>
        </div>
      <div style={{ margin: `3rem auto`, maxWidth: 900 }}>
        {children}
      </div>
    </div>
  )
}
