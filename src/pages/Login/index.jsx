import { Container, LeftBox, RightBox, Title, Form, InputBox } from "./styles";
import Logo from "../../assets/Logo.svg";
import { Button } from "../../components/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";

import { toast } from "react-toastify";

const Login = () => {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um email válido")
        .required("O email é obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Digite uma senha"),
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
    const response = await toast.promise(
      api.post("/session", {
        email: data.email,
        password: data.password,
      }),
      {
        pending: "Verificando dados",
        success: "Seja bem-vindo(a)",
        error: "Email ou senha incorretos",
      }
    );

    console.log(response);
  };

  return (
    <Container>
      <LeftBox>
        <img src={Logo} alt="" />
      </LeftBox>
      <RightBox>
        <Title>
          Olá seja bem vindo ao <span>Dev Burger</span>! <br /> Acesse com seu
          <span> login e senha</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não possui conta? <a href="#">Clique aqui</a>.
        </p>
      </RightBox>
    </Container>
  );
};

export default Login;
