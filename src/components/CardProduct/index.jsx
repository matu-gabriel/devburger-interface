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
import { useNavigate } from "react-router-dom";

export const CardProduct = ({ product }) => {
  const { putProductInCart } = useCart();
  const navigate = useNavigate();

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
        <Button
          onClick={() => {
            putProductInCart(product), navigate("/carrinho");
          }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  );
};
