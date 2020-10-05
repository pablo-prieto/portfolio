import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  .email-link {
    border: 1px solid ${({ theme }) => theme.primaryHover};
    border-radius: 4px;
    padding: 0.75rem 1.75rem;
    margin-top: 50px;
  }

  .email-link:hover {
    background-color: rgba(47, 212, 205, 0.1);
  }
`

const StyledH1 = styled.h1`
  margin-bottom: 2rem;
  margin-top: 10px;
  font-size: clamp(40px, 8vw, 80px);
`

// const StyledH2 = styled.h2`
//   margin-bottom: 2rem;
// `

const StyledP = styled.p`
  max-width: 500px;
  margin-bottom: 0;
`

const email = "prietop.pablo@gmail.com";

export default function Intro() {
  return (
    <StyledDiv className="intro">
      <span>Hi, my name is</span>
      <StyledH1>Pablo Prieto</StyledH1>
      {/* <StyledH2>Another thing here!</StyledH2> */}
      <StyledP>
        I'm a software engineer based in New York who specializes in front-end
        development and loves to code.
      </StyledP>
      <a href={`mailto:${email}`} className="email-link">
        Contact Me
      </a>
    </StyledDiv>
  )
}
