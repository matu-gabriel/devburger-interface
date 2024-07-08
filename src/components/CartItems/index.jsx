import { Container, HeaderItems, BodyItems, EmptyCart } from "./style";
import { useCart } from "../../hooks/CartContex";
import formatedCurrency from "../../utils/formatedCurrency";

export const CartItems = () => {
  const { cartProducts, increaseQuantity, decreaseQuantity } = useCart();
  console.log(cartProducts);
  return (
    <Container>
      <HeaderItems>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </HeaderItems>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <BodyItems key={product.id}>
            <img src={product.url} alt="" />
            <p>{product.name}</p>
            <p>{product.formatedPrice}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
            </div>
            <p>{formatedCurrency(product.quantity * product.price)}</p>
          </BodyItems>
        ))
      ) : (
        <EmptyCart>Carrinho vazio</EmptyCart>
      )}
    </Container>
  );
};
