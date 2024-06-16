import { Container, LeftBox, RightBox, Title, Form, InputBox } from "./styles";
import Logo from "../../assets/Logo.svg";
import { Button } from "../../components/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services/api";

import { toast } from "react-toastify";

const Register = () => {
  const schema = yup
    .object({
      name: yup.string().required("O nome é obrigatorio"),
      email: yup
        .string()
        .email("Digite um email válido")
        .required("O email é obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Digite uma senha"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), "As senhas devem ser iguais"])
        .required("Confirme sua senha"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        "/users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        }
      );

      if (status === 200 || status === 201) {
        toast.success("Cadastro realizado com sucesso");
      } else if (status === 409) {
        toast.error("Email já cadastrado! Faça o login.");
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Servidor com problemas, tente novamente");
    }
  };

  return (
    <Container>
      <LeftBox>
        <img src={Logo} alt="" />
      </LeftBox>
      <RightBox>
        <Title>Criar conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <label>Name</label>
            <input type="text" {...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputBox>
          <InputBox>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputBox>
          <InputBox>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputBox>
          <InputBox>
            <label>Confirmar senha</label>
            <input type="password" {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputBox>
          <Button type="submit">Cadastrar</Button>
        </Form>
        <p>
          Já possui conta? <a href="#">Clique aqui</a>.
        </p>
      </RightBox>
    </Container>
  );
};

export default Register;
