import CardTotal from "../CardTotal";
import { Container } from "./style";

const Cart = ({ children, currentSale, handleClickProducts }) => {
  return (
    <Container>
      <div className="divGreen">
        <h3>Carrinho de compras</h3>
      </div>

      <div className="divRecebeProduct">{children}</div>

      {currentSale.length > 0 && (
        <CardTotal
          handleClickProducts={handleClickProducts}
          currentSale={currentSale}
        />
      )}
    </Container>
  );
};

export default Cart;
