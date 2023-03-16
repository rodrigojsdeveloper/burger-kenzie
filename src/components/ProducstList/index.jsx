import { Container } from "./style";
import Product from "../Product";

const ProducstList = ({ products, handleClick }) => {
  return (
    <Container>
      {products.map((product) => (
        <Product key={product.id} product={product} handleClick={handleClick} />
      ))}
    </Container>
  );
};

export default ProducstList;
