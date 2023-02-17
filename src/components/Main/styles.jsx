import styled from "styled-components";

export const Container = styled.main`
  padding: 0 24px;

  section {
    max-width: 1228px;
    width: 100%;
    margin: 0 auto;

    &:nth-child(1) {
      padding: 175px 0 0 0;

      div {
        max-width: 536px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;

        h2 {
          font-family: "Montserrat";
          font-weight: 600;
          font-size: 48px;
          line-height: 59px;
          text-transform: capitalize;
          color: ${({ theme }) => theme.black};
        }

        span {
          font-family: "Montserrat";
          font-weight: 400;
          font-size: 24px;
          line-height: 38px;
          color: ${({ theme }) => theme.black};
        }

        a {
          width: 292px;
          height: 60px;
          margin-top: 24px;

          display: flex;
          align-items: center;
          justify-content: center;

          background-color: ${({ theme }) => theme.red};
          color: ${({ theme }) => theme.white};
          border-radius: 10px;

          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          text-decoration: none;
        }
      }
    }
  }
`;
