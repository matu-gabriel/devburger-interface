import { Container, Label, Input } from "./style";
import api from "../../../services/api";
import { useEffect } from "react";
import ReactSelect from "react-select";
import { Button } from "../../../components";
import { useForm } from "react-hook-form";

const NewProduct = () => {
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await api.get("products");
      console.log(data);
    };
    getProducts();
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input type="name" {...register("name")} />
        <Label>Preço</Label>
        <Input type="number" {...register("price")} />
        <Label>Imagem</Label>
        <Input type="file" accept="image/png, image/jpeg" />
        <ReactSelect />
        <Button>Adicionar produto</Button>
      </form>
    </Container>
  );
};

export default NewProduct;
