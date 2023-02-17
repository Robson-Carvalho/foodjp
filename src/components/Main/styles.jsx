import styled from "styled-components";

export const Container = styled.main`
  padding: 0 24px;

  section {
    max-width: 1228px;
    width: 100%;
    margin: 0 auto;

    &:nth-child(1) {
      padding: 175px 0 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 1120px) {
        padding: 32px 0 0 0;
        justify-content: center;
      }

      div {
        max-width: 536px;
        display: flex;

        flex-direction: column;
        gap: 24px;
        width: 100%;

        @media (max-width: 520px) {
          max-width: 312px;
        }

        h2 {
          font-family: "Montserrat";
          font-weight: 600;
          font-size: 48px;
          line-height: 59px;
          text-transform: capitalize;
          color: ${({ theme }) => theme.black};

          @media (max-width: 520px) {
            font-size: 32px;
            line-height: 39px;
          }
        }

        span {
          font-family: "Montserrat";
          font-weight: 400;
          font-size: 24px;
          line-height: 38px;
          color: ${({ theme }) => theme.black};

          @media (max-width: 520px) {
            font-size: 16px;
            line-height: 26px;
          }
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

          @media (max-width: 520px) {
            margin-top: 8px;
            width: 100%;
            height: 40px;
            border-radius: 6px;
            font-size: 16px;
          }
        }
      }

      img {
        @media (max-width: 1120px) {
          display: none;
        }
      }
    }
  }
`;
