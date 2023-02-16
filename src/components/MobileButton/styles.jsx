import styled from "styled-components";

export const Container = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;

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
