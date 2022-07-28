import { HeaderStyled } from "./style"
import titulo from "../../assets/titulo.png"
import { useState } from "react"


const Header = ({ products, setFilteredProducts }) => {

    const [ valueInput, setValueInput ] = useState("")

    return (

        <HeaderStyled>
            <div>
                <img src={ titulo } alt="Titulo" />

                <div>
                    <input 
                    type="text" 
                    placeholder="Digitar Pesquisa"
                    value={ valueInput }
                    onChange={ (e) => setValueInput(e.target.value) } />

                    <button onClick={ () => setFilteredProducts(products.filter(product => product.category.toLowerCase().includes(valueInput.toLowerCase()) || product.name.toLowerCase().includes(valueInput.toLowerCase()))) }>Pesquisar</button>
                </div>
            </div>
        </HeaderStyled>
    )
}

export default Header
