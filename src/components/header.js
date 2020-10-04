import React from "react"

export default function Header(props) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <div>
      <h1>{props.headerText}</h1>
    </div>
  )
}
