/* eslint-disable react/prop-types */
import {
  Container,
  Image,
  ProductName,
  ProductPrice,
  Button,
  ProductDescription,
} from "./style";

export const CardProduct = ({ product }) => {
  return (
    <Container>
      <Image src={product.url} alt="" />

      <div>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          quisquam ipsum dolorem
        </ProductDescription>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button>Adicionar</Button>
      </div>
    </Container>
  );
};

export default CardProduct;