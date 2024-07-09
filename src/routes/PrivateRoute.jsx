import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRouter = ({ children, isAdmin }) => {
  const user = localStorage.getItem("devburger:user");

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" />;
  }

  return user && children;
};

export default PrivateRouter;
