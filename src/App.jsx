import { createGlobalStyle } from "styled-components";
import { reset } from "./styles/global.style";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root{
    --red: #DA2535,
    --gray: #616161,
    --white: #FBFBFB,
    --white-200: #F3F3F3,
    --black: #292929,
  }

  html{
    scroll-behavior: smooth;
  }
  body{
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};
