import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 1rem;
  width: 100%;
  height: 510px;
  background-color: ${({ theme }) => theme.contentBackground};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 0.8rem;
  padding: 1rem;

  .Card__header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: fit-content;
    border: 1px blue solid;

    .Card__header__avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 43%;
      height: 100%;

      .Card__header__avatar_pic {
        width: 170px;
        height: 170px;
        border-radius: 50%;
      }
    }
    .Card__header__info {
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: auto auto;
      width: 100%;
      min-height: 180px;

      .Card__header_info_text {
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
          color: ${({ theme }) => theme.textAlt};
          padding-top: 1.1rem;
        }
      }

      .Card__header_info_bio {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        span {
          color: ${({ theme }) => theme.textAlt};
        }
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
      padding: 1rem;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 30% 30%;
      gap: 0.5rem;
      align-items: center;

      div {
        display: flex;
        gap: 0.3rem;
      }
    }
  }
`;