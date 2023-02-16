import { useState } from "react";
import { Container, NavBar, Menu } from "./styles";

import { MobileButton } from "../MobileButton/index";

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuVisibilityToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <Container isMenuVisible={isMenuVisible}>
      <NavBar>
        <h1>
          Food<span>JP</span>
        </h1>
        <Menu isMenuVisible={isMenuVisible}>
          <li onClick={handleMenuVisibilityToggle}>
            <a href="#home">Inicio</a>
          </li>
          <li onClick={handleMenuVisibilityToggle}>
            <a href="#menu">Cardápio</a>
          </li>
          <li onClick={handleMenuVisibilityToggle}>
            <a href="#about">Sobre</a>
          </li>
          <li onClick={handleMenuVisibilityToggle}>
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
