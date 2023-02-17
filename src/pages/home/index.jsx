import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

import { ScrollButton } from "../../components/ScrollButton";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Main />
      <ScrollButton />
    </Container>
  );
};
