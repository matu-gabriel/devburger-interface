import { Container, Image, Title, Wrapper } from "./style";
import HeaderImage from "../../assets/header-cart.png";
import { CartItems } from "../../components/CartItems";

export const Cart = () => {
  return (
    <Container>
      <Image src={HeaderImage} alt="Logo carrinho" />
      <Title>Chekout - Pedidos</Title>
      <Wrapper>
        <CartItems />
      </Wrapper>
    </Container>
  );
};
