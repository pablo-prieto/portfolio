import React from "react"
import Intro from "../components/intro"
import Layout from "../components/layout"
import About from "../components/sections/about"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"

export default function Home() {
  return (
    <Layout>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <p style={{fontSize: "10px"}}>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
        {" "} from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">{" "}www.flaticon.com</a>
      </p>
    </Layout>
  )
}
