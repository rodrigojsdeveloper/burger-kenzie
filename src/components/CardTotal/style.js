import styled from "styled-components";

export const Container = styled.div`
  background: var(--background-header);
  text-align: center;
  padding: 0 10px 20px 10px;
  border-radius: 0 0 5px 5px;

  &::before {
    content: "";
    width: 100%;
    height: 2px;
    background: var(--border-product);
    display: block;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  div > p {
    color: var(--color-name-product);

    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }

  div > span {
    color: var(--color-description);

    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }

  & > button {
    width: 100%;
    max-width: 343px;
    height: 60px;

    background: var(--border-product);

    border: 2px solid var(--border-product);
    border-radius: 8px;

    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: var(--color-description);
  }
`;
