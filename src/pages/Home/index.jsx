import LogoHome from "../../assets/logo-home.svg";
import { Container, HomeImg, ContainerHome } from "./style";
import { CategoryCarousel, OfferCarousel } from "../../components";

export const Home = () => {
  return (
    <Container>
      <HomeImg src={LogoHome} alt="logo-home" />
      <ContainerHome>
        <CategoryCarousel />
        <OfferCarousel />
      </ContainerHome>
    </Container>
  );
};
