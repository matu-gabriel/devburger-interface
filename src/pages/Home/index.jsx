import LogoHome from "../../assets/logo-home.svg";
import { Container, HomeImg, ContainerHome } from "./style";
import CategoryCarousel from "../../components/CategoryCarousel";
import OfferCarousel from "../../components/OfferCarousel";
// import { Title } from "../Login/styles";

const Home = () => {
  return (
    <Container>
      <HomeImg src={LogoHome} alt="logo-home" />
      {/* <h1>Bem vindo</h1> */}
      <ContainerHome>
        <CategoryCarousel />
        <OfferCarousel />
      </ContainerHome>
    </Container>
  );
};

export default Home;
