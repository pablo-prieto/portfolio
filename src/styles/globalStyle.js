import { createGlobalStyle } from "styled-components"
import * as cursor from "../../static/cursor-green.png"

export const GlobalStyle = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    cursor: url(${cursor}), auto;
    overflow-x: hidden;

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  h1 {
    color: ${({ theme }) => theme.primaryLight};
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

  a {
    color: #2fd4cd;
    text-shadow: none;
    text-decoration: none;
    background-image: none;
  }

  ul {
    width: 100%;
    padding-top: 15px;
  }

  .container {
    padding-left: 30px;
    padding-right: 30px;
  }

  .intro {
    // margin-top: 300px;
    // margin-bottom: 600px;
  }

  .content {
    margin: 3rem auto;
    padding-left: 50px;
    padding-right: 50px;
    max-width: 900px;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
    @media (max-width: 1080px) {
      padding-right: 40px;
      padding-left: 40px;
    }
    @media (max-width: 768px) {
      padding-right: 25px;
      padding-left: 25px;
    }
  }
  
  .logo {
    width: 32px;
    height: 45px;
    margin-bottom: 0;
  }
`
