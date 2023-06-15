import { useState } from "react";

export const useModals = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  return { loginModalVisible, setLoginModalVisible };
};
