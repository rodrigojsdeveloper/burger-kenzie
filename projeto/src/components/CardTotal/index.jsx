import { Container } from "./style"


const CardTotal = ({ currentSale, handleClickProducts }) => {

    return (
        <Container>
            <div>
                <p>Total</p>
                <span>R$ { currentSale.reduce((valorAnterior, valorAtual) => valorAnterior + Number(valorAtual.price * valorAtual.count), 0).toFixed(2).replace(".", ",") }</span>
            </div>

            <button onClick={ handleClickProducts }>Remover todos</button>
        </Container>
    )
}

export default CardTotal
