import { Container, NavBar, Menu } from "./styles";

export const Header = () => {
  return (
    <Container>
      <NavBar>
        <h1>
          Food<span>JP</span>
        </h1>
        <Menu>
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
      </NavBar>
    </Container>
  );
};
