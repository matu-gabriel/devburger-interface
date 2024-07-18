import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <p>Desculpe, ocorreu um erro inesperado</p>
      <p>
        <i>{error.statusText || error.messege}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
