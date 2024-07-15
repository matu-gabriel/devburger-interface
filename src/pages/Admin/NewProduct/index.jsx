import { Container, Label, Input, ButtonStyle, LabelImage } from "./style";
import api from "../../../services/api";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, Controller } from "react-hook-form";
import { ErrorMessege } from "../../../components/ErrorMessege";

const NewProduct = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    price: Yup.number().required(),
    file: Yup.mixed().test("required", "Carregue uma imagem", (value) => {
      return value?.length > 0;
    }),
    category: Yup.object().required(),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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
        <ErrorMessege>{errors.name?.message}</ErrorMessege>

        <Label>Preço</Label>
        <Input type="number" {...register("price")} />
        <ErrorMessege>{errors.price?.message}</ErrorMessege>

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
        <ErrorMessege>{errors.file?.message}</ErrorMessege>

        <Label>Categoria</Label>
        <Controller
          control={control}
          name="category"
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
        <ErrorMessege>{errors.category?.message}</ErrorMessege>

        <ButtonStyle>Adicionar produto</ButtonStyle>
      </form>
    </Container>
  );
};

export default NewProduct;