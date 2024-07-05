import { useEffect, useState } from "react";
import LogoProducts from "../../assets/logo-produtos.svg";
import {
  Container,
  HomeImg,
  CategoryButton,
  CategoriesContainer,
  CategoryProducts,
} from "./styles";
import api from "../../services/api";
import CardProduct from "../../components/CardProduct";
import formatedCurrency from "../../utils/formatedCurrency";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
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
      const newData = data.map((formatCurrency) => {
        return {
          ...formatCurrency,
          formatedPrice: formatedCurrency(formatCurrency.price),
        };
      });
      console.log(newData);
      setProducts(newData);
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
      <CategoryProducts>
        {products &&
          products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </CategoryProducts>
    </Container>
  );
};

export default Products;
