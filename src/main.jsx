import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { UserProvider } from "./hooks/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="colored" />
  </>
);
