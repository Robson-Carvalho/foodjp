import { Container, NavBar, Menu } from "./styles";

import { MobileButton } from "../MobileButton/index";

export const Header = ({ isMenuVisible, handleMenuVisibilityToggle }) => {
  const handleClickInLinkMenu = () => {
    if (isMenuVisible === true) handleMenuVisibilityToggle();
  };

  return (
    <Container isMenuVisible={isMenuVisible}>
      <NavBar>
        <h1>
          Food<span>JP</span>
        </h1>
        <Menu isMenuVisible={isMenuVisible}>
          <li onClick={handleClickInLinkMenu}>
            <a href="#home">Inicio</a>
          </li>
          <li onClick={handleClickInLinkMenu}>
            <a href="#menu">Cardápio</a>
          </li>
          <li onClick={handleClickInLinkMenu}>
            <a href="#about">Sobre</a>
          </li>
          <li onClick={handleClickInLinkMenu}>
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
