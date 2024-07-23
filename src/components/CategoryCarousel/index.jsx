import { useEffect, useState } from "react";
import { Container, ContainerItems, Image } from "./style";
import Carousel from "react-elastic-carousel";
import api from "../../services/api";

export const CategoryCarousel = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get("/categories");
      setCategories(data);
    };
    loadCategories();
  }, []);

  console.log(categories);

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <Container>
      <h1>CATEGORIAS</h1>
      <Carousel itemsToShow={4} breakPoints={breakpoints} itemPadding={[0, 30]}>
        {categories &&
          categories.map((category) => (
            <ContainerItems
              key={category.id}
              to="/produtos"
              state={{ categoryId: category.id }}
            >
              <Image src={category.url} />
              <h2>{category.name}</h2>
              <p>Hamburgueres, X-saladas, Misto-Quentes</p>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  );
};
