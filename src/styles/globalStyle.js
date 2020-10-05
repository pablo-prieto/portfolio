import { createGlobalStyle } from "styled-components"
import * as cursor from "../../static/cursor-green.png"

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    width: 100%;
    overflow-y: unset;
  }

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

  h2 {
    color: ${({ theme }) => theme.primaryLight};
  }

  span {
    color: ${({ theme }) => theme.primaryHover};
  }

  section {
    margin: 0 auto;
    padding-bottom: 100px;

    @media (max-width: 768px) {
      padding-bottom: 80px;
    }

    @media (max-width: 480px) {
      padding-bottom: 60px;
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
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding-bottom: 200px;
  }

  .content {
    margin: auto;
    padding-left: 50px;
    padding-right: 50px;
    max-width: 1200px;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
    padding-right: 50px;
    padding-left: 50px;
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
