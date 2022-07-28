import styled from "styled-components"


export const Container = styled.div`

    width: 100%;
    height: 80px;
    background: var(--background-header);

    display: flex;
    padding: 5px 10px;

    margin: 10px 0;

    & > img {
        width: 70px;
        height: 70px;

        border-radius: 8px;
        background: var(--border-product);

        margin-right: 15px;
    }

    .descricaoProdutoNoCarrinho {
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .descricaoProdutoNoCarrinho div > h5, span {
        margin: 5px 0;
    }

    .descricaoProdutoNoCarrinho div > span {
        color: var(--color-description);
    }

    .descricaoProdutoNoCarrinho div > p {
        cursor: pointer;
        float: right;
        padding-right: 10px;

        color: var(--color-remover-cart);
        
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;

        height: 15px;
    }

    .divBotaoRemover {
        display: grid;
    }

    .descricaoProdutoNoCarrinho div div .botaoMais, .botaoMenos {
        border: 1px solid var(--border-product);
        padding: 0 4px;
        background: transparent;
    }

    .descricaoProdutoNoCarrinho div div .botaoMais:hover, .botaoMenos:hover {
        transition: background 300ms ease 0s;
        background: var(--color-description);
        color: var(--background);
    }

    .descricaoProdutoNoCarrinho div div span {
        border-top: 1px solid var(--border-product);
        border-bottom: 1px solid var(--border-product);
        padding: 0.9px 5px;
        font-size: 15px;
    }

    .descricaoProdutoNoCarrinho p:hover {
        text-decoration: underline;
        color: var(--color-name-product);
    }
`
