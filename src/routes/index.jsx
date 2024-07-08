import { createBrowserRouter } from "react-router-dom";

import { Login, Register, Home, Products, Cart } from "../pages";

import ErrorPage from "./ErrorPage";
import PrivateRouter from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Home />
      </PrivateRouter>
    ),
  },
  {
    path: "/produtos",
    element: (
      <PrivateRouter>
        <Products />
      </PrivateRouter>
    ),
  },
  {
    path: "/carrinho",
    element: (
      <PrivateRouter>
        <Cart />
      </PrivateRouter>
    ),
  },
]);
