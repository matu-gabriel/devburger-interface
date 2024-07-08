import { Container, ContainerLeft, ContainerRight, StyledLink } from "./style";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <Container>
      <ContainerLeft>
        <StyledLink to="/" isActive={pathname === "/"}>
          Home
        </StyledLink>
        <div></div>
        <StyledLink to="/produtos" isActive={pathname.includes("produtos")}>
          Produtos
        </StyledLink>
        <div></div>
        <StyledLink to="*">Contatos</StyledLink>
      </ContainerLeft>
      <ContainerRight>
        <div className="user">
          <PersonOutlineOutlinedIcon color="secondary" fontSize="large" />
          <div>
            <p>Olá, Matu</p>
            <Link style={{ color: "red" }}>Sair</Link>
          </div>
        </div>
        <div className="order">
          <ReceiptLongOutlinedIcon color="secondary" fontSize="large" />
          <Link to="/carrinho">Pedidos</Link>
        </div>
      </ContainerRight>
    </Container>
  );
};
