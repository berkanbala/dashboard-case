import { useModals } from "common/hooks/useModals";
import { createContext, useContext, useMemo, useState } from "react";

export const MainContext = createContext({} as any);
export const useAppContext = () => useContext(MainContext);

export const AppContext = ({ children }: Props) => {
  const initialAuthValue = { authname: "", authpasswords: "", auth: false };

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { loginModalVisible, setLoginModalVisible } = useModals();

  const contextValue = useMemo(
    () => ({
      pass,
      setPass,
      user,
      setUser,
      auth,
      setAuth,
      initialAuthValue,
      loginModalVisible,
      setLoginModalVisible,
    }),
    [
      auth,
      initialAuthValue,
      loginModalVisible,
      pass,
      setLoginModalVisible,
      user,
    ]
  );

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};

interface Props {
  children: React.ReactNode;
}
