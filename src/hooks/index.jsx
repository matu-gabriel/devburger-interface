import { CartProvider } from "./CartContex";
import { UserProvider } from "./UserContext";

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
);
export default AppProvider;
