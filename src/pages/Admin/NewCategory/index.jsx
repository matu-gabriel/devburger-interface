import { Container, Label, Input, ButtonStyle, LabelImage } from "./style";
import api from "../../../services/api";
import { useState } from "react";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { ErrorMessege } from "../../../components/ErrorMessege";
import { toast } from "react-toastify";

const NewCategory = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    file: Yup.mixed().test("required", "Carregue uma imagem", (value) => {
      return value?.length > 0;
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [fileName, setFileName] = useState(null);

  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append("name", data.name);

    productFormData.append("file", data.file[0]);

    await toast.promise(api.post("/categories", productFormData), {
      pending: "Criando categoria...",
      success: "Categoria criada com sucesso",
      error: "Falha ao criar categoria, tente novamente",
    });
  };

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Categoria</Label>
        <Input type="name" {...register("name")} />
        <ErrorMessege>{errors.name?.message}</ErrorMessege>

        <LabelImage>
          {fileName || (
            <>
              <AddPhotoAlternateOutlinedIcon />
              Carregar imagem da categoria
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

        <ButtonStyle>Criar categoria</ButtonStyle>
      </form>
    </Container>
  );
};

export default NewCategory;
