import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 1rem;
  width: 100%;
  height: auto;
  min-height: 510px;
  background-color: ${({ theme }) => theme.contentBackground};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 0.8rem;
  padding: 1rem;

  .Card__header {
    display: grid;
    grid-template-columns: 20% 1fr;
    grid-template-rows: auto;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;

    .Card__header__avatar {
      justify-self: center;
      display: flex;
      justify-content: center;
      align-items: center;
      grid-row-start: 1;
      grid-row-end: 3;

      .Card__header__avatar_pic {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }
    .Card__header__info {
      width: 100%;
      height: auto;
      align-self: flex-start;

      .Card__header_info_text {
        width: 100%;
        min-height: 90px;
        display: flex;
        justify-content: space-between;

        .info {
          width: 60%;
          flex-grow: 1;

          h1 {
            color: ${({ theme }) => theme.textAlt};
          }

          p {
            color: ${({ theme }) => theme.btn};
          }
        }
        span {
          color: ${({ theme }) => theme.text};
          padding-top: 1.1rem;
        }
      }
    }
    .Card__header_info_bio {
      flex-grow: 1;
      grid-column: 2;

      span {
        color: ${({ theme }) => theme.textAlt};
      }
    }
  }
  .Card__github {
    justify-self: end;
    width: 70%;
    min-height: 240px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;

    .Card__github__info {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 2fr;
      padding: 1rem;
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.background};

      span {
        text-align: center;
        color: ${({ theme }) => theme.textAlt};
        font-size: 1.2rem;
      }

      h2 {
        text-align: center;
        color: ${({ theme }) => theme.textAlt};
        font-size: 2rem;
      }
    }

    .Card__github__local {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      align-items: center;

      div {
        display: flex;
        justify-content: flex-start;
        gap: 0.5rem;

        svg {
          fill: ${({ theme }) => theme.text};
          align-self: center;
        }

        span {
          padding: 0.3rem;
          font-size:0.8rem ;
          align-self: flex-end;
          color: ${({ theme }) => theme.text};
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .Card__header {
      grid-template-columns: 30% 1fr;
      gap: 0.5rem;

      .Card__header__info {
        .Card__header_info_text {
          .info {
            flex-grow: 0;
            width: auto;

            h1 {
              font-size: 2rem;
            }

            p {
            }
          }
          span {
            flex-grow: 1;
            padding-top: 0.8rem;
            font-size: 0.8rem;
            text-align: center;
          }
        }
      }

      .Card__header__avatar {
        grid-row-start: 1;
        grid-row-end: 2;
      }
      .Card__header_info_bio {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }

    .Card__github {
      width: 100%;

      .Card__github__info {
      }

      .Card__github__local {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        div {
          padding: 0.3rem;
          gap: 0.5rem;
          span {
            text-align: start;
            align-self: flex-end;
            font-size: 0.8rem;
            color: ${({ theme }) => theme.text};
          }
        }
      }
    }
  }
`;