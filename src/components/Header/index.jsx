import { useState } from "react";
import { Container, NavBar, Menu } from "./styles";

import { MobileButton } from "../MobileButton/index";

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuVisibilityToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <Container>
      <NavBar>
        <h1>
          Food<span>JP</span>
        </h1>
        <Menu isMenuVisible={isMenuVisible}>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#menu">Cardápio</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#">Entrar</a>
          </li>
        </Menu>
        <MobileButton
          isMenuVisible={isMenuVisible}
          handleMenuVisibilityToggle={handleMenuVisibilityToggle}
        />
      </NavBar>
    </Container>
  );
};
