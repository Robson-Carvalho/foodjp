import styled from "styled-components";

export const Container = styled.button`
  display: none;
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

    &:nth-child(even) {
      width: 22px;
      border: 2px solid ${({ theme }) => theme.black};
    }
  }
`;
