import styled from "styled-components"


export const Container = styled.div`

    width: 100%;
    max-width: 363px;
    margin-left: 40px;

    .divGreen {
        width: 100%;
        color: white;
        height: 65px;
        background: var(--background-product-button);
        border-radius: 5px 5px 0px 0px;
        align-items: center;
        display: flex;
    }

    .divGreen > h3 {
        text-align: start;
        padding-left: 25px;
    }

    .divRecebeProduct {
        height: 280px;
        background: var(--background-header);
        border-radius: 0px 0px 5px 5px;
        overflow-y: auto;
    }

    & ::-webkit-scrollbar {
        background: transparent;
        width: 5px;
    }

    & ::-webkit-scrollbar-button {
        display: none;
    }

    & ::-webkit-scrollbar-thumb {
        background:var(--color-remover-cart);
        border-radius: 32px;
    }

    .divTextosDentroDoCart {
        text-align: center;
        margin-top: 100px;
    }

    .textoDentroDoCart {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
    }

    .segundoTextoDentroDoCart {
        color: var(--color-description);

        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
    }

    @media screen and (min-width: 280px) and (max-width: 800px) {

        width: unset;
        justify-content: center;
    }

    @media screen and (min-width: 280px) and (max-width: 385px) {

        margin: 10px;
    }

    @media screen and (min-width: 385px) and (max-width: 800px) {

        margin: 10px auto;
    }
`
