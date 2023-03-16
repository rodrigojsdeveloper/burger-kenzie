import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: var(--background-header);
  padding: 13px;
  display: flex;
  justify-content: center;

  & > div {
    width: 100%;
    max-width: 1365px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }

  & > div > div {
    display: flex;
    align-items: center;
  }

  & > div > div input {
    width: 100%;
    min-width: 365px;
    height: 45px;
    padding: 0px 10px 0px 10px;
    border: 2px solid var(--border-product);
    border-radius: 8px;
  }

  & > div > div input:focus::-webkit-input-placeholder {
    color: transparent;
    border-color: var(--color-name-product);
  }

  & > div > div button {
    margin-left: -112px;
    width: 100%;
    max-width: 107px;
    background: var(--background-product-button);
    border: 2px solid var(--background-product-button);
    border-radius: 8px;
    color: white;
    padding: 0px 15px;
    height: 35px;
  }

  & > div > div button:hover {
    background: var(--background-product-button-hover);
    border: 2px solid var(--background-product-button-hover);
  }

  @media screen and (max-width: 310px) {
    & > div > div input {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 800px) {
    & > div {
      flex-direction: column;
    }

    & > div > div {
      justify-content: center;
      padding: 5px;
    }

    & > div > div button {
      margin-left: -113px;
    }

    & > div > div input {
      min-width: unset;
      max-width: 365px;
    }
  }

  @media screen and (min-width: 1400px) {
    & > div {
      padding: 0;
    }
  }
`;
