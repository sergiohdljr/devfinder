import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 840px;
  height: 659px;

  @media screen and (max-width: 768px){
    width: 573px;
    height: 100vh;
    margin: 2rem 1rem;
  }
`;
