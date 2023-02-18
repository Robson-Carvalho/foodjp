import { Container } from "./styles";

import imgSushiJapanese from "../../assets/sushi-japanese.png";
import imgHoldingPlate from "../../assets/img-holding-plate.png";

import imgChickenRamen from "../../assets/img-3.png";
import imgSpicyRamen from "../../assets/img-1.png";
import imgTraditionalRamen from "../../assets/img-2.png";

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
            A culinária tradicional japonesa consiste em pratos preparados de
            arroz, peixe ou carne acompanhados de tsukemono picles.
          </span>
          <a
            target="_blank"
            href="https://www.sp.br.emb-japan.go.jp/itpr_pt/gastronomia.html#:~:text=A%20culin%C3%A1ria%20tradicional%20japonesa%20consiste,acompanhados%20de%20tsukemono%20(picles)."
          >
            Ler mais sobre o modo de preparo{" "}
          </a>
        </div>
      </section>
      <section>
        <h2>Mais populares</h2>
        <div>
          <article>
            <img src={imgChickenRamen} alt="Chicken Ramen" />
            <h3>Ramen de Frango</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <span>R$ 30</span>
          </article>
          <article>
            <img src={imgSpicyRamen} alt="Spicy Ramen" />
            <h3>Ramen de Frango</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <span>R$ 30</span>
          </article>
          <article>
            <img src={imgTraditionalRamen} alt="Traditional Ramen" />
            <h3>Ramen de Frango</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <span>R$ 30</span>
          </article>
        </div>
      </section>
    </Container>
  );
};
