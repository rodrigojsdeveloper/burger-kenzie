import { ToastContainer, toast } from "react-toastify"
import ProducstList from "./components/ProducstList"
import CartProduct from "./components/CartProduct"
import "react-toastify/dist/ReactToastify.css"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import Cart from "./components/Cart"
import api from "./services/api"


const App = () => {

  const [ products, setProducts ] = useState([])

  const [ currentSale, setCurrentSale ] = useState([])

  const [ filteredProducts, setFilteredProducts ] = useState([])

  useEffect(() => {
    fetch(api + "products")
    .then(res => res.json())
    .then(res => setProducts(res))
    .catch(err => console.log(err))
  }, [])

  const handleClick = product => {

    const findProduct = currentSale.find(p => p.id === product.id)

    if(!findProduct) {

      const newProduct = {...product, count: 1}
      
      setCurrentSale([...currentSale, newProduct])

      toast.success("Produto adicionado no carrinho")
    }
    else {

      const indexProduct = currentSale.indexOf(findProduct)

      const newCurrentSale = [...currentSale]

      newCurrentSale[indexProduct].count++

      setCurrentSale(newCurrentSale)
    }
  }

  const removeProduct = product => {

    if(product.count > 1) {

      const indexProduct = currentSale.indexOf(product)

      const newCurrentSale = [...currentSale]

      newCurrentSale[indexProduct].count--

      setCurrentSale(newCurrentSale)
    }
    else {
      
      // eslint-disable-next-line no-restricted-globals
      if(confirm("Deseja excluir mesmo?")) {
      const newCurrentSale = currentSale.filter(p => p.id !== product.id)
      
      setCurrentSale(newCurrentSale)
    }
    }
  }

  const handleClickProduct = product => setCurrentSale(currentSale.filter(x => x.id !== product.id))

  const handleClickProducts = () => setCurrentSale([])

  return (
    <>
      <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />

      <Header setFilteredProducts={ setFilteredProducts } products={ products } />

      <div className="container">
        <ProducstList products={ filteredProducts.length > 0 ? filteredProducts : products } handleClick={ handleClick } />

        <Cart currentSale={ currentSale } handleClickProducts={ handleClickProducts } children={
            
          currentSale.length > 0 ? (
            <>
              {
                currentSale.map(product => <CartProduct key={ product.id } product={ product } handleClickProduct={ handleClickProduct } handleClick={ handleClick } removeProduct={ removeProduct } />)
              }

            </>
          ) : (
            
            <div className="divTextosDentroDoCart">
                <h2 className="textoDentroDoCart">Sua sacola está vazia</h2>
                <p className="segundoTextoDentroDoCart">Adicione itens</p>
            </div>
          )
        } />
        </div>
    </>
  )
}

export default App
