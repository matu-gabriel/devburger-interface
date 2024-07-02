import { useEffect, useState } from "react";
import LogoProducts from "../../assets/logo-produtos.svg";
import {
  Container,
  HomeImg,
  CategoryButton,
  CategoriesContainer,
} from "./styles";
import api from "../../services/api";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await api.get("categories");

      const newCategory = [{ id: 0, name: "Todos" }, ...data];

      setCategories(newCategory);
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await api.get("products");
      console.log(data);
    };

    getProducts();
  }, []);

  return (
    <Container>
      <HomeImg src={LogoProducts} />
      <CategoriesContainer>
        {categories &&
          categories.map((category) => (
            <CategoryButton
              type="button"
              key={category.id}
              isActive={active === category.id}
              onClick={() => setActive(category.id)}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesContainer>
    </Container>
  );
};

export default Products;
