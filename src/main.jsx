import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import GlobalStyles from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Login />
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="colored" />
  </React.StrictMode>
);
