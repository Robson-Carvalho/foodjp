import { Container } from "./styles";

export const MobileButton = ({ isMenuVisible, handleMenuVisibilityToggle }) => {
  return (
    <Container
      id="btn-mobile"
      aria-label="Abrir menu"
      aria-haspopup="true"
      aria-controls="menu"
      aria-expanded="false"
      isMenuVisible={isMenuVisible}
      onClick={handleMenuVisibilityToggle}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
};
