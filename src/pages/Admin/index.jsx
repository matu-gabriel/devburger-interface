import { Outlet } from "react-router-dom";
import { SideMenuAdmin } from "../../components";
import { Container, ContainerItems } from "./style";

export const Admin = () => {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        <Outlet />
      </ContainerItems>
    </Container>
  );
};
