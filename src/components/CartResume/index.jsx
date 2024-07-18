import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Container, ResumeTop, ResumeBottom } from "./style";
import { useCart } from "../../hooks/CartContex";
import formatedCurrency from "../../utils/formatedCurrency";
import api from "../../services/api";
import { toast } from "react-toastify";

export const CartResume = () => {
  const { cartProducts, clearCart } = useCart();

  const [finalPrice, setFinalPrice] = useState(0);
  const [priceTax] = useState(5);

  useEffect(() => {
    const totalPrice = cartProducts.reduce((acc, curr) => {
      return curr.price * curr.quantity + acc;
    }, 0);

    setFinalPrice(totalPrice);
  }, [cartProducts]);

  const submitOrder = async () => {
    const order = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity };
    });

    await toast.promise(api.post("orders", { products: order }), {
      pending: "Realizando seu pedido",
      success: "Pedido realizado com sucesso",
      error: "Falha ao realizar seu pedido, tente novamente",
    });
  };

  const handleClick = async () => {
    await submitOrder();
    clearCart();
  };

  return (
    <div>
      <Container>
        <h1>Resumo do pedido</h1>
        <ResumeTop>
          <p className="items">Itens</p>
          <p className="price">{formatedCurrency(finalPrice)}</p>
          <p className="tax">Taxa de entrega</p>
          <p className="price-tax">{formatedCurrency(priceTax)}</p>
        </ResumeTop>
        <ResumeBottom>
          <p>Total</p>
          <p>{formatedCurrency(finalPrice + priceTax)}</p>
        </ResumeBottom>
      </Container>
      {cartProducts && cartProducts.length > 0 ? (
        <Button onClick={handleClick}>Continuar</Button>
      ) : (
        <></>
      )}
    </div>
  );
};
