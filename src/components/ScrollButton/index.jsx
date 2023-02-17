import { Container } from "./styles";

import { useState, useContext } from "react";
import { ThemeContext } from "styled-components";

import { BsFillArrowUpSquareFill } from "react-icons/bs";

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const { red, white } = useContext(ThemeContext);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Container visible={visible}>
      <BsFillArrowUpSquareFill
        size={32}
        fill={red}
        style={{ background: white }}
        onClick={scrollToTop}
      />
    </Container>
  );
};
