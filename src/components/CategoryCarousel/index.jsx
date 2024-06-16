import { useEffect, useState } from "react";
import { Container, ContainerItems, Image } from "./style";
import Carousel from "react-elastic-carousel";
import api from "../../services/api";

const CategoryCarousel = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get("/categories");
      setCategories(data);
    };
    loadCategories();
  }, []);

  return (
    <Container>
      <h1>CATEGORIAS</h1>
      <Carousel itemsToShow={4} style={{ widht: "90%" }}>
        {categories &&
          categories.map((category) => (
            <ContainerItems key={category.id}>
              <Image src={category.url} alt="categoria" />
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  );
};

export default CategoryCarousel;
