import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Container, ResumeTop, ResumeBottom } from "./style";
import { useCart } from "../../hooks/CartContex";
import formatedCurrency from "../../utils/formatedCurrency";
import api from "../../services/api";
import { toast } from "react-toastify";

export const CartResume = () => {
  const { cartProducts } = useCart();

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

    console.log(order);

    await toast.promise(api.post("orders", { products: order }), {
      pending: "Realizando seu pedido",
      success: "Pedido realizado com sucesso",
      error: "Falha ao realizar seu pedido, tente novamente",
    });
  };

  return (
    <div>
      <Container>
        <h1>Resumo do pedido</h1>
        <ResumeTop>
          <p className="items">Itens</p>
          <p className="price">{formatedCurrency(finalPrice)}</p>
          <p className="tax">Taxa de entrega</p>
          <p className="price-tax">{priceTax}</p>
        </ResumeTop>
        <ResumeBottom>
          <p>Total</p>
          <p>{formatedCurrency(finalPrice + priceTax)}</p>
        </ResumeBottom>
      </Container>
      <Button onClick={submitOrder}>Continuar</Button>
    </div>
  );
};
