import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  .container {
    padding-left: 50px;
    padding-right: 50px;
  }

  .intro {
    margin-top: 300px;
    margin-bottom: 600px;
  }

  .content {
    margin: 3rem auto;
    max-width: 900px;
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }
`

export default GlobalStyle
