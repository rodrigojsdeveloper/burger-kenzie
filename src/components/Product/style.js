import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 346px;

  border: 2px solid var(--border-product);
  border-radius: 5px;

  margin: 10px;

  :hover {
    transform: scale(1.1);
  }

  figure {
    text-align: center;
    background: var(--background-header);
  }

  figure > img {
    height: 150px;
  }

  div {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  div > h3 {
    margin-bottom: 15px;
  }

  div > p {
    color: var(--color-description);

    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }

  div > span {
    margin-top: 15px;
    margin-bottom: 10px;

    color: var(--background-product-button);
    font-weight: bold;
  }

  div > button {
    width: 106px;
    height: 40px;
    background: var(--background-product-button);
    border: 2px solid var(--background-product-button);
    padding: 0px 20px;
    border-radius: 8px;
    color: white;
  }

  div > button:hover {
    background: var(--background-product-button-hover);
    border: 2px solid var(--background-product-button-hover);
  }

  @media screen and (max-width: 800px) {
    :hover {
      transform: unset;
    }

    div {
      width: 255px;
    }

    div > h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media screen and (min-width: 900px) and (max-width: 1052px) {
    width: 100%;
    max-width: 300px;
  }
`;
