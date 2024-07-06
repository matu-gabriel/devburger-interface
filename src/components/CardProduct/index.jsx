/* eslint-disable react/prop-types */
import {
  Container,
  Image,
  ProductName,
  ProductPrice,
  Button,
  ProductDescription,
} from "./style";

import { useCart } from "../../hooks/CartContex";

export const CardProduct = ({ product }) => {
  const { putProductInCart } = useCart();

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
        <Button onClick={() => putProductInCart(product)}>Adicionar</Button>
      </div>
    </Container>
  );
};
