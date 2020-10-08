import React, { useRef } from 'react';
import { useOnClickOutside } from '../hooks/burger-menu-hook';
import { Link } from "gatsby"
import logo from "../../static/letterPNew3.png"
import { Burger, Menu } from "./index"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Navbar(props) {
  // const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => props.setOpen(false));

  return (
    <div className="row">
      <div>
        <a href="/" aria-label="home">
          <img className="logo" src={logo} alt="logo" />
        </a>
      </div>
      <div>
        {props.windowWidth < "768" ? (
          <div ref={node}>
            <Burger open={props.open} setOpen={props.setOpen} />
            <Menu open={props.open} setOpen={props.setOpen} />
          </div>
        ) : (
          <ul>
            <ListLink to="/">Home</ListLink>
            {/* <ListLink to="/#about">About</ListLink> */}
            <ListLink to="/#projects">Projects</ListLink>
            <ListLink to="/#contact">Contact</ListLink>
            <a href="/PabloPrietoResume2020.pdf" className="resume-link">
              Resume
            </a>
          </ul>
        )}
      </div>
    </div>
  )
}
