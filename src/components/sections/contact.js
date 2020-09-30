import React from "react"
// import { Link } from "gatsby"
import Header from "../../components/header"
import styled from 'styled-components';

const StyledContactSection = styled.section``

export default function Contact() {
  return (
    <StyledContactSection>
      <div id="contact">
        {/* <Link to="/">Home</Link> */}
        <Header headerText="Contact" />
        <h1>I'd love to talk! Email me at the address below</h1>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </StyledContactSection>
  )
}
