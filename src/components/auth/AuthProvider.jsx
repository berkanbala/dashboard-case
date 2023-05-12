import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({});
export const useAppContext = () => useContext(AuthContext);
const initialAuthValue = { authname: "", authpasswords: "", auth: false };

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const contextValue = {
    pass,
    setPass,
    user,
    setUser,
    auth,
    setAuth,
    initialAuthValue,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
