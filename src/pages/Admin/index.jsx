import { SideMenuAdmin } from "../../components";
import Order from "./Order";
import { Container } from "./style";

export const Admin = () => {
  return (
    <Container>
      <SideMenuAdmin />
      <Order />
    </Container>
  );
};
