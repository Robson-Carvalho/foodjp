import { Container } from "./styles";

import imgSushiJapanese from "../../assets/sushi-japanese.png";
import imgHoldingPlate from "../../assets/img-holding-plate.png";

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
      <section>
        <img src={imgHoldingPlate} alt="image Holding Plate" />
        <div>
          <h2>Feita de forma Tradicional</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </span>
          <a href="">Ler mais sobre o modo de preparo </a>
        </div>
      </section>
    </Container>
  );
};
