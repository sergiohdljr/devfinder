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
    padding-left: 0.5rem;
    width: 70%;
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};

    ::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }

  button {
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
`;