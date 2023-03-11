import styled from "styled-components";

export const Container = styled.main`
  padding: 0 24px;
  background-color: ${({ theme }) => theme.white};

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

    &:nth-child(2) {
      padding-top: 100.3px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 56px;

      @media (max-width: 1200px) {
        flex-direction: column;
        padding-top: 48px;
      }

      img {
        width: 604px;
        height: 500px;
        border-radius: 16px;

        @media (max-width: 720px) {
          width: 312px;
          height: 350px;
        }
      }

      div {
        max-width: 500px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 24px;

        h2 {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 48px;
          line-height: 62px;
          color: ${({ theme }) => theme.black};

          @media (max-width: 520px) {
            max-width: 181px;
            font-size: 24px;
            line-height: 31px;
            text-align: center;
            margin: 0 auto;
          }
        }

        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 38px;
          color: ${({ theme }) => theme.black};

          @media (max-width: 520px) {
            max-width: 290px;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            text-align: center;
            margin: 0 auto;
          }
        }

        a {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 29px;
          margin-top: 16px;
          text-decoration-line: underline;
          color: ${({ theme }) => theme.red};

          @media (max-width: 520px) {
            font-size: 16px;
            line-height: 19px;
            margin: 0 auto;
          }
        }
      }
    }

    &:nth-child(3) {
      padding-top: 100px;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 162px;

      @media (max-width: 520px) {
        padding-top: 56px;
      }

      h2 {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        color: ${({ theme }) => theme.black};

        @media (max-width: 520px) {
          font-size: 24px;
          line-height: 30px;
        }
      }

      .cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 137px 44px;
        align-items: center;
        justify-content: center;

        .card {
          position: relative;
          max-width: 380px;
          width: 100%;

          div {
            background-color: ${({ theme }) => theme.white_200};
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 270px 25px 32px 25px;
            border-radius: 32px;

            @media screen and (max-width: 580px) {
              padding: 202px 32px 48px 32px;
            }

            img {
              position: absolute;
              top: -14%;
              left: 50%;
              transform: translate(-50%, -14%);

              @media screen and (max-width: 580px) {
                width: 209px;
              }
            }

            .name {
              font-family: "Montserrat";
              font-style: normal;
              font-weight: 500;
              font-size: 32px;
              color: ${({ theme }) => theme.black};
              margin-bottom: 16px;

              @media screen and (max-width: 580px) {
                font-size: 24px;
              }
            }

            .description {
              font-family: "Inter";
              font-style: normal;
              font-weight: 400;
              font-size: 18px;
              text-align: center;
              color: ${({ theme }) => theme.gray};
              margin-bottom: 32px;

              @media screen and (max-width: 580px) {
                font-size: 16.0514px;
              }
            }

            .price {
              font-family: "Montserrat";
              font-style: normal;
              font-weight: 500;
              font-size: 32px;
              color: ${({ theme }) => theme.black};

              @media screen and (max-width: 580px) {
                font-weight: 400;
              }
            }
          }
        }
      }
    }

    &:nth-child(4) {
      padding: 100px 0 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @media screen and (max-width: 1275px) {
        align-items: center;
      }
      @media screen and (max-width: 520px) {
        padding: 56px 0 0 0;
      }

      h2 {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        color: ${({ theme }) => theme.black};
        margin-bottom: 48px;

        @media (max-width: 520px) {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
        }
      }

      .comments {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 20px;

        @media screen and (max-width: 1275px) {
          justify-content: center;
        }

        .comment {
          max-width: 604px;
          width: 100%;
          background: ${({ theme }) => theme.white_200};
          border-radius: 16px;
          padding: 41px 40px 39px 40px;

          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;

          @media screen and (max-width: 1200px) {
            align-items: center;
          }

          @media screen and (max-width: 520px) {
            padding: 24px 22px 22px 22px;
          }

          img {
            margin-bottom: 8px;

            @media screen and (max-width: 520px) {
              width: 60px;
            }
          }

          .name {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 32px;
            color: ${({ theme }) => theme.black};

            @media screen and (max-width: 520px) {
              font-size: 18px;
            }
          }

          .message {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            color: ${({ theme }) => theme.gray};

            @media screen and (max-width: 520px) {
              text-align: center;
              font-size: 16px;
            }
          }
        }
      }
    }

    &:nth-child(5) {
      padding: 100px 0;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h2 {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        margin-bottom: 48px;
        color: ${({ theme }) => theme.dark};
      }

      .map {
        margin-bottom: 56px;
        max-width: 1228px;
        width: 100%;
        height: 500px;
      }

      .wrapperInput {
        width: 100%;
        display: flex;
        flex-direction: row;

        justify-content: center;

        .input {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: #fbfbfb;
          border-top: 1px solid #292929;
          border-left: 1px solid #292929;
          border-bottom: 1px solid #292929;
          border-radius: 10px 0px 0px 10px;

          width: 630px;
          height: 70px;

          img {
            width: 30px;
            height: 30px;
          }

          input {
            border: none;
            background: transparent;
            outline: none;
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            color: ${({ theme }) => theme.dark};
          }
        }

        button {
          border: none;
          padding: 20px 52px;
          background: ${({ theme }) => theme.red};
          border-radius: 0px 10px 10px 0px;

          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          color: ${({ theme }) => theme.white};
        }
      }
    }
  }
`;
