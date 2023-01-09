import styled from "styled-components";

export const ResearchBar = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.contentBackground};
  border-radius: 0.8rem;
  padding: 0.3rem;
  box-shadow: ${({ theme }) => theme.shadow};

 
  svg {
    margin-left: 1rem;
    fill: ${({ theme }) => theme.text};
  }

  input {
    flex-grow: 1;
    width: 70%;
    background-color: transparent;
    outline: none;
    border: none;
    margin-left: 2rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};

    ::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }

  .Clear_input {
    background-color: transparent;
    font-size: 1.2rem;
    color: red;
    width: 24px;
    height: 80%;
    margin-right: 0.5rem;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .Submit_input {
    width: 15%;
    height: 90%;
    background-color: ${({ theme }) => theme.btn};
    border: none;
    border-radius: 0.8rem;
    color: ${({ theme }) => theme.contentBackground};
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.btnHover};
    }
  }
  
  @media screen and (max-width: 768px) {
    input {
      ::placeholder {
        font-size: 0.9rem;
      }
    }

    .Submit_input {
      width: 20%;
    }
  }

  @media screen and (max-width: 568px) {
    svg {
      margin-left: 0;
    }
    input {
      margin-left: 0.5rem;
      font-size: 1rem;

      ::placeholder {
        font-size: 0.7rem;
      }
    }

    .Clear_input {
      margin-right: 0;
    }

    .Submit_input {
      width: 25%;
      font-size: 0.8rem;
      padding: 0.2rem;
    }
  }
`;
