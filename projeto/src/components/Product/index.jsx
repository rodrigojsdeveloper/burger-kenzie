import { Container } from "./style"


const Product = ({ product, handleClick }) => {

    return (
        <Container>

            <figure>
                <img src={ product.img } alt={ product.name } />
            </figure>
            
            <div>
                <h3>{ product.name }</h3>

                <p>{ product.category }</p>

                <span>R$ { product.price.toFixed(2).replace(".", ",") }</span>

                <button onClick={ () => handleClick(product) }>Adicionar</button>
            </div>
        </Container>
    )
}

export default Product
