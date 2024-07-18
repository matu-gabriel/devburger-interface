import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import AppProvider from "./hooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="colored" />
  </>
);
