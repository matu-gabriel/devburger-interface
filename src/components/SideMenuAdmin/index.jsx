import { Container, ContainerLinks, LinkSide } from "./style";
import sideLinks from "./menuLinks";
import Logo from "../../assets/Logo.svg";
import { useUser } from "../../hooks/UserContext";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export const SideMenuAdmin = () => {
  const { logout } = useUser();
  return (
    <Container>
      <img src={Logo} alt="logo" style={{ width: "200px" }} />
      {sideLinks &&
        sideLinks.map((sideLink) => (
          <ContainerLinks key={sideLink.id}>
            <sideLink.icon className="icon" />
            <LinkSide to={sideLink.link}>{sideLink.label}</LinkSide>
          </ContainerLinks>
        ))}
      <ContainerLinks style={{ position: "absolute", bottom: "20px" }}>
        <LogoutOutlinedIcon style={{ color: "#fff" }} />
        <LinkSide to="/login" onClick={logout}>
          Sair
        </LinkSide>
      </ContainerLinks>
    </Container>
  );
};
