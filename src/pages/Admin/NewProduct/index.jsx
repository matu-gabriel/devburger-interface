import { Container, Label, Input, ButtonStyle, LabelImage } from "./style";
import api from "../../../services/api";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

import { useForm, Controller } from "react-hook-form";

const NewProduct = () => {
  const { register, handleSubmit, control } = useForm();
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await api.get("categories");
      console.log(data);
      setCategories(data);
    };
    getCategories();
  }, []);

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
        <Label>Categoria</Label>
        <Controller
          control={control}
          name="category_id"
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder=""
              />
            );
          }}
        ></Controller>
        <ButtonStyle>Adicionar produto</ButtonStyle>
      </form>
    </Container>
  );
};

export default NewProduct;
