import { useState } from "react";
import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

import { ScrollButton } from "../../components/ScrollButton";

export const Home = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuVisibilityToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <Container isMenuVisible={isMenuVisible}>
      <Header
        isMenuVisible={isMenuVisible}
        handleMenuVisibilityToggle={handleMenuVisibilityToggle}
      />
      <Main />
      <ScrollButton />
    </Container>
  );
};
