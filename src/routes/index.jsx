import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
// import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./ErrorPage";
import Home from "../pages/Home";
import Products from "../pages/Products";

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
    element: <Home />,
  },
  {
    path: "/produtos",
    element: <Products />,
  },
]);
