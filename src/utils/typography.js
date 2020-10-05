import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

// fairyGateTheme.overrideThemeStyles = ({ rhythm }, options) => ({
//     'h2,h3': {
//       marginBottom: rhythm(0.5),
//       marginTop: rhythm(0.5),
//     }
//   })

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography