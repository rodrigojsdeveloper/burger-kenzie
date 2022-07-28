import { Container } from "./style"


const CartProduct = ({ product, handleClickProduct, handleClick, removeProduct }) => {

    return (

        <Container >
            <img src={ product.img } alt={ product.name } />

            <div className="descricaoProdutoNoCarrinho">
                <div>
                    <h5>{ product.name }</h5>

                    <span>{ product.category }</span>
                </div>

                <div className="divBotaoRemover">
                    <p onClick={ () => handleClickProduct(product) }>Remover</p>
                    
                    <div>                  
                        <button className="botaoMais" onClick={ () => handleClick(product) }>+</button>
                        <span>{ product.count }</span>
                        <button className="botaoMenos" onClick={ () => removeProduct(product) }>-</button>
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default CartProduct
