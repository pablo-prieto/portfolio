import React from "react"
// import { Link } from "gatsby"
import Header from "../../components/header"
import styled from "styled-components"
import useSiteMetadata from "../../hooks/use-site-metadata"

const StyledContactSection = styled.section``

const StyledP = styled.p`
  margin-bottom: 50px;
`

export default function Contact() {
  const { email } = useSiteMetadata()

  return (
    <StyledContactSection>
      <div id="contact">
        {/* <Link to="/">Home</Link> */}
        <Header headerText="Contact" />
        <StyledP>
          If you are interested in what you've seen and would like to reach out.
        </StyledP>
        <div>
          <a href={`mailto:${email}`} className="link email">
            Contact Me
          </a>
        </div>
      </div>
    </StyledContactSection>
  )
}
