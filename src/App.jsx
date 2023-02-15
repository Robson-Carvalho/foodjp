import { createGlobalStyle } from "styled-components";
import { reset } from "./styles/global.style";
import { ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html{
    scroll-behavior: smooth;
  }
  body{
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    font-family: 'Montserrat', sans-serif;
  }
`;

const cssVariables = {
  red: "#DA2535",
  gray: "#616161",
  white: "#FBFBFB",
  white_200: "#F3F3F3",
  black: "#292929",
};

import { Home } from "./pages/home";

export const App = () => {
  return (
    <ThemeProvider theme={cssVariables}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};
