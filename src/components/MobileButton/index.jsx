import { Container } from "./styles";

export const MobileButton = ({ isMenuVisible }) => {
  return (
    <Container
      id="btn-mobile"
      aria-label="Abrir menu"
      aria-haspopup="true"
      aria-controls="menu"
      aria-expanded="false"
      isMenuVisible={isMenuVisible}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
};
