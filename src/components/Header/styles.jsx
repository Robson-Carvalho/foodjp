import styled, { css } from "styled-components";

export const Container = styled.header`
  padding: 0 24px;
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

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 91px;

  @media (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.white};

    width: 100%;
    height: 100vh;
    padding-top: 64px;

    position: fixed;
    top: 47px;
    left: 0;
    transform: translateY(47px);

    overflow-y: hidden;
    visibility: hidden;
    transition: 0.3s ease-in;

    ${({ isMenuVisible }) =>
      isMenuVisible &&
      css`
        height: 100%;
        visibility: visible;
      `}
  }

  li {
    a {
      text-decoration: none;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      color: ${({ theme }) => theme.black};
      transition: 0.3s;

      &:hover {
        color: ${({ theme }) => theme.red};
      }
    }

    &:nth-child(4) {
      a {
        padding: 10px 60px;
        margin-left: 108px;
        border: 2px solid ${({ theme }) => theme.black};
        border-radius: 10px;
        transition: 0.3s;
        margin: 0 auto;

        &:hover {
          color: ${({ theme }) => theme.black};
          border: 2px solid ${({ theme }) => theme.white_200};
        }
      }
    }
  }
`;
