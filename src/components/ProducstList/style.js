import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 972px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: unset;
  }
`;
