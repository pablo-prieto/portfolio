import React from "react"
import { Link } from "gatsby"
import logo from "../../static/letterPNew3.png"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Navbar(props) {
  return (
    <div className="row">
      <div>
        <a href="/" aria-label="home">
          <img className="logo" src={logo} alt="logo" />
        </a>
      </div>
      <div>
        {props.windowWidth < "768" ? (
          <div>Random</div>
        ) : (
          <ul style={{ listStyle: `none`, width: `100%`, paddingTop: "15px" }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/#about">About</ListLink>
            <ListLink to="/#projects">Projects</ListLink>
            <ListLink to="/#contact">Contact</ListLink>
          </ul>
        )}
      </div>
    </div>
  )
}
