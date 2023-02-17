import { Container } from "./styles";

import imgSushiJapanese from "../../assets/sushi-japanese.png";

export const Main = () => {
  return (
    <Container>
      <section>
        <div>
          <h2>Comida Oriental</h2>
          <span>
            A culinária Japonesa é bastante equilibrada, sendo muito rica em
            peixes (ômega 3), vegetais, massas e ingredientes frescos.
          </span>
          <a href="#">Cardápio</a>
        </div>
        <img src={imgSushiJapanese} alt="Image Sushi Japanese" />
      </section>
    </Container>
  );
};
