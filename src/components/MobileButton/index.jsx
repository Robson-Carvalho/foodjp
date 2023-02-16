import { Container } from "./styles";

export const MobileButton = () => {
  return (
    <Container
      id="btn-mobile"
      aria-label="Abrir menu"
      aria-haspopup="true"
      aria-controls="menu"
      aria-expanded="false"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
};
