import { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const infoUser = async (userInfo) => {
    setUser(userInfo);

    await localStorage.setItem("devburger:user", JSON.stringify(userInfo));
  };

  const logout = async () => {
    await localStorage.removeItem("devburger:user");
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem("devburger:user");

      if (clientInfo) {
        setUser(JSON.parse(clientInfo));
      }
    };

    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, infoUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Error");
  }

  return context;
};
