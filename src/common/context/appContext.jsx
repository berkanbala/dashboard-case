import { useModals } from "common/hooks/useModals";
import { createContext, useContext, useState } from "react";

export const MainContext = createContext({});

export const useAppContext = () => useContext(MainContext);

export const AppContext = ({ children }) => {
  const initialAuthValue = { authname: "", authpasswords: "", auth: false };

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { loginModalVisible, setLoginModalVisible } = useModals(false);

  const contextValue = {
    pass,
    setPass,
    user,
    setUser,
    auth,
    setAuth,
    initialAuthValue,
    loginModalVisible,
    setLoginModalVisible,
  };

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};
