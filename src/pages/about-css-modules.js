import React from "react"
import styles from "./about-css-modules.module.css"

console.log(styles)

// const User = props => (
//   <div className={styles.user}>
//     <img src={props.avatar} className={styles.avatar} alt="" />
//     <div className={styles.description}>
//       <h2 className={styles.username}>{props.username}</h2>
//       <p className={styles.excerpt}>{props.excerpt}</p>
//     </div>
//   </div>
// )

export default function AboutCSSModules() {
  return (
    <div id="aboutCSS">
      <h1>About CSS Modules</h1>
      <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      {/* <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      /> */}
    </div>
  )
}
