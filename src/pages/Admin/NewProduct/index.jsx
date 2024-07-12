import { Container, Label, Input, ButtonStyle, LabelImage } from "./style";
import api from "../../../services/api";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

import { useForm } from "react-hook-form";

const NewProduct = () => {
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await api.get("products");
      console.log(data);
    };
    getProducts();
  }, []);

  const [fileName, setFileName] = useState(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input type="name" {...register("name")} />
        <Label>Preço</Label>
        <Input type="number" {...register("price")} />
        <LabelImage>
          {fileName || (
            <>
              <AddPhotoAlternateOutlinedIcon />
              Carregar imagem do produto
            </>
          )}

          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register("file")}
            onChange={(value) => {
              setFileName(value.target.files[0]?.name);
            }}
          />
        </LabelImage>
        <ReactSelect />
        <ButtonStyle>Adicionar produto</ButtonStyle>
      </form>
    </Container>
  );
};

export default NewProduct;
