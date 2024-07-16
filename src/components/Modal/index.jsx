/* eslint-disable react/prop-types */

import {
  Container,
  Label,
  Input,
  ButtonStyle,
  LabelImage,
  ContainerInput,
} from "./style";
import api from "../../services/api";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, Controller } from "react-hook-form";
import { ErrorMessege } from "../../components/ErrorMessege";
import { toast } from "react-toastify";

export const Modal = ({ show, onClose, product }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    price: Yup.number().required(),
    category: Yup.object().required(),
    offer: Yup.bool(),
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

  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append("name", data.name);
    productFormData.append("price", data.price);
    productFormData.append("category_id", data.category.id);
    productFormData.append("file", data.file[0]);
    productFormData.append("offer", data.offer);

    await toast.promise(api.put(`products/${product.id}`, productFormData), {
      pending: "Editando produto...",
      success: "Produto editado com sucesso",
      error: "Falha ao editar produto, tente novamente",
    });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await api.get("categories");
      setCategories(data);
    };
    getCategories();
  }, []);

  if (!show) return null;

  return (
    <Container onClick={handleOverlayClick}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input type="name" {...register("name")} defaultValue={product.name} />
        <ErrorMessege>{errors.name?.message}</ErrorMessege>

        <Label>Preço</Label>
        <Input
          type="number"
          {...register("price")}
          defaultValue={product.price}
        />
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
          defaultValue={product.category}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder=""
                defaultValue={product.category}
              />
            );
          }}
        ></Controller>
        <ErrorMessege>{errors.category?.message}</ErrorMessege>

        <ContainerInput>
          <input
            type="checkbox"
            {...register("offer")}
            defaultChecked={product.offer}
          />
          <Label style={{ fontSize: "15px" }}>Está em oferta?</Label>
        </ContainerInput>

        <ButtonStyle>Editar produto</ButtonStyle>
      </form>
    </Container>
  );
};
