import styled from "styled-components";

export const DevFinderHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  

  h1 {
    color: ${({ theme }) => theme.textAlt};
  }

  button {
    background-color: transparent;
    color: ${({ theme }) => theme.textAlt};
    outline: none;
    border: none;
    font-family: "Space Mono", monospace;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }

  @media screen and (max-width: 568px){
    button{
      padding-top: 0.5rem;
      font-size: 0.8rem;
      gap: 0.4rem;
    }
  }
`;
