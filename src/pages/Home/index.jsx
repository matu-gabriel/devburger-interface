import LogoHome from "../../assets/logo-home.svg";
import { Container, HomeImg } from "./style";
import CategoryCarousel from "../../components/CategoryCarousel";

const Home = () => {
  return (
    <Container>
      <HomeImg src={LogoHome} alt="logo-home" />
      <div>
        <CategoryCarousel></CategoryCarousel>
      </div>
    </Container>
  );
};

export default Home;
