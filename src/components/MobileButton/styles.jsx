import styled, { css } from "styled-components";

export const Container = styled.button`
  display: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;

  @media (max-width: 1120px) {
    display: flex;
  }

  span {
    display: block;
    width: 28px;
    border: 2px solid ${({ theme }) => theme.black};
    border-radius: 2px;
    transition: 0.3s;
    z-index: 100;

    ${({ isMenuVisible }) =>
      isMenuVisible &&
      css`
        position: fixed;
      `}

    &:nth-child(even) {
      width: 22px;
      border: 2px solid ${({ theme }) => theme.black};

      @media (max-width: 520px) {
        border: 1.5px solid ${({ theme }) => theme.black};
      }

      ${({ isMenuVisible }) =>
        isMenuVisible &&
        css`
          display: none;
        `}
    }

    &:nth-child(1) {
      ${({ isMenuVisible }) =>
        isMenuVisible &&
        css`
          transform: rotate(-135deg);
        `}
    }

    &:nth-child(3) {
      ${({ isMenuVisible }) =>
        isMenuVisible &&
        css`
          transform: rotate(135deg);
        `}
    }

    @media (max-width: 520px) {
      border: 1.5px solid ${({ theme }) => theme.black};
    }
  }
`;
