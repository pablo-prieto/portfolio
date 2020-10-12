import React from "react"
import styled from "styled-components"
import About from "./sections/about"
import useSiteMetadata from "../hooks/use-site-metadata"

const StyledDiv = styled.div`
  display: flex;
  place-items: center stretch;
  justify-content: space-between;
  min-height: 100vh;
  padding-bottom: 200px;
  flex-wrap: wrap;
`

const StyledH1 = styled.h1`
  margin-bottom: 2rem;
  margin-top: 10px;
  font-size: clamp(40px, 8vw, 80px);
`

const StyledP = styled.p`
  max-width: 500px;
  margin-bottom: 50px;
`

export default function Intro() {
  const { email } = useSiteMetadata()

  return (
    <StyledDiv>
      <div style={{ width: "500px", flexGrow: 1 }}>
        <span>Hi, my name is</span>
        <StyledH1>Pablo Prieto</StyledH1>
        <StyledP>
          I'm a software engineer based in New York who specializes in front-end
          development but loves to learn and understand every part of the tech
          stack.
        </StyledP>
        <a href={`mailto:${email}`} className="link email">
          Contact Me
        </a>
      </div>
      <div style={{ width: "600px", flexGrow: 1 }}>
        <About></About>
      </div>
    </StyledDiv>
  )
}
