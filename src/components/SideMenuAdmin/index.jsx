import { Container, ContainerLinks, LinkSide } from "./style";
import sideLinks from "./menuLinks";
import Logo from "../../assets/Logo.svg";
import { useUser } from "../../hooks/UserContext";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useLocation } from "react-router-dom";

export const SideMenuAdmin = () => {
  const { pathname } = useLocation();

  const { logout } = useUser();
  return (
    <Container>
      <img src={Logo} alt="logo" style={{ width: "200px" }} />
      {sideLinks &&
        sideLinks.map((sideLink) => (
          <ContainerLinks
            key={sideLink.id}
            isActive={pathname === `/pedidos/${sideLink.link}`}
          >
            <sideLink.icon className="icon" />
            <LinkSide to={sideLink.link}>{sideLink.label}</LinkSide>
          </ContainerLinks>
        ))}
      <ContainerLinks
        style={{
          position: "fixed",
          bottom: "20px",
          backgroundColor: "transparent",
        }}
      >
        <LogoutOutlinedIcon style={{ color: "#fff" }} />
        <LinkSide to="/login" onClick={logout}>
          Sair
        </LinkSide>
      </ContainerLinks>
    </Container>
  );
};
