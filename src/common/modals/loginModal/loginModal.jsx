import { validateLogin } from "../validation";
import { useTranslation } from "react-i18next";
import { useAppContext } from "common/context/appContext";
import { Input } from "common/components/ui/input/input";
import { Button } from "common/components/ui/button/button";
import { useState } from "react";
import styles from "./loginModal.module.scss";
import Iconx from "common/media/icons/x.png";

export const LoginModal = () => {
  const handlePropagation = (e) => e.stopPropagation();

  const { t } = useTranslation("translations");

  const {
    // auth,
    setAuth,
    setUser,
    setPass,
    loginModalVisible,
    setLoginModalVisible,
  } = useAppContext();

  const [firstNameValue, setFirstNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const proceedLogin = (e) => {
    e.preventDefault();
    // if (!validateLogin(auth.authname, auth.authpasswords)) {
    //   return;
    // }
    if (!validateLogin(firstNameValue, passwordValue)) {
      return;
    }
    console.log("state");
    setLoginModalVisible(false);
    setUser(firstNameValue);
    setPass(passwordValue);
    setAuth(true);
    setFirstNameValue("");
    setPasswordValue("");
  };

  const handleModal = () => {
    setLoginModalVisible(false);
  };

  if (!loginModalVisible) return null;

  return (
    <div onClick={handleModal} className={styles.container}>
      <div onClick={handlePropagation} className={styles.content}>
        <div className={styles.modalTitle}> {t("modal.modalTitle")} </div>
        <form onSubmit={proceedLogin} className={styles.modalForm}>
          <Input
            type="text"
            name="authname"
            placeholder={t("modal.modalUser")}
            // value={auth.authname}
            value={firstNameValue}
            onChange={(e) => setFirstNameValue(e.target.value)}
            required
          />

          <Input
            type="password"
            name="authpasswords"
            placeholder={t("modal.modalPlace")}
            // value={auth.authpasswords}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            required
          />

          <Button
            type="submit"
            className={styles.button}
            text={t("modal.modalSubmit")}
            disabled={Object.values({ firstNameValue, passwordValue }).some(
              (formValue) => formValue === ""
            )}
          />
        </form>

        <span onClick={handleModal} className={styles.close}>
          <img src={Iconx} alt="" />
        </span>
      </div>
    </div>
  );
};
