import { useContext, createContext, useState, useEffect } from "react";

const AuthUserContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await localStorage.getItem("devburger:user");

      if (storedUser) {
        setUserAuth(JSON.parse(setUserAuth));
      }
    };
    loadUser();
  }, []);

  const logout = () => setUserAuth(null);

  return (
    <AuthUserContext.Provider value={{ userAuth, logout }}>
      {children}
    </AuthUserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthUserContext);

  if (!context) {
    throw new Error("Error");
  }

  return context;
};
