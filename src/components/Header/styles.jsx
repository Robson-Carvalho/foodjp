import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: auto;
`;

export const NavBar = styled.nav`
  max-width: 1228px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0 0 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    color: ${({ theme }) => theme.black};

    span {
      color: ${({ theme }) => theme.red};
    }
  }
`;
