import { SideMenuAdmin } from "../../components";
import ListProducts from "./ListProducts";
import Order from "./Order";
import { Container } from "./style";

export const Admin = () => {
  return (
    <Container>
      <SideMenuAdmin />
      {/* <Order /> */}
      <ListProducts />
    </Container>
  );
};
