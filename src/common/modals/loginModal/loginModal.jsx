import styles from "./loginModal.module.scss";
import { validateLogin } from "../validation";
import { useTranslation } from "react-i18next";
import { useAppContext } from "common/context/appContext";
import { Input } from "common/components/ui/input/input";
import Iconx from "common/media/icons/x.png";
import { Button } from "common/components/ui/button/button";

export const LoginModal = () => {
  const handlePropagation = (e) => e.stopPropagation();
  const { t } = useTranslation("translations");
  const {
    auth,
    setAuth,
    user,
    setUser,
    pass,
    setPass,
    loginModalVisible,
    setLoginModalVisible,
  } = useAppContext();
  const handleModal = () => {
    setLoginModalVisible(false);
    setUser("");
    setPass("");
  };

  const proceedLogin = (e) => {
    e.preventDefault();
    if (!validateLogin(auth.authname, auth.authpasswords)) {
      return;
    }
    setLoginModalVisible(false);
    setUser(user);
    setAuth(true);
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
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />

          <Input
            type="password"
            name="authpasswords"
            placeholder={t("modal.modalPlace")}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <Button type="submit" className={styles.button}>
            {t("modal.modalSubmit")}
          </Button>
        </form>

        <span onClick={handleModal} className={styles.close}>
          <img src={Iconx} alt="" />
        </span>
      </div>
    </div>
  );
};
