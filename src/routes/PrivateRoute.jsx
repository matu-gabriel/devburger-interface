import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("devburger:user");

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
