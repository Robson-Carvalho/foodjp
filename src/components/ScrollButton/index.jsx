import { Container } from "./styles";

import { useState, useContext } from "react";
import { ThemeContext } from "styled-components";

import { BsFillArrowUpSquareFill } from "react-icons/bs";

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const { red } = useContext(ThemeContext);

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
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Container visible={visible}>
      <BsFillArrowUpSquareFill size={36} fill={red} onClick={scrollToTop} />
    </Container>
  );
};
