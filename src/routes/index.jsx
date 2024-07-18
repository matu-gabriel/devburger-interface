import { createBrowserRouter, Navigate } from "react-router-dom";

import { Login, Register, Home, Products, Cart, Admin } from "../pages";

import ErrorPage from "./ErrorPage";
import PrivateRouter from "./PrivateRoute";
import { Header } from "../components";
import Order from "../pages/Admin/Order";
import ListProducts from "../pages/Admin/ListProducts";
import NewProduct from "../pages/Admin/NewProduct";

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
        <Header />
        <Home />
      </PrivateRouter>
    ),
  },
  {
    path: "/produtos",
    element: (
      <PrivateRouter>
        <Header />
        <Products />
      </PrivateRouter>
    ),
  },
  {
    path: "/carrinho",
    element: (
      <PrivateRouter>
        <Header />
        <Cart />
      </PrivateRouter>
    ),
  },

  {
    path: "/pedidos",
    element: (
      <PrivateRouter isAdmin>
        <Admin />
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="produtos" />,
      },
      {
        path: "produtos",
        element: <Order />,
      },
      {
        path: "listar-produtos",
        element: <ListProducts />,
      },
      {
        path: "novo-produto",
        element: <NewProduct />,
      },
    ],
  },
]);
