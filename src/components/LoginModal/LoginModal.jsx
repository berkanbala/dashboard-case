import "./LoginModal.css";
import { useAppContext } from "../auth/AuthProvider";
import { validateLogin } from "../validation";
import { useTranslation } from "react-i18next";
import "../../i18n";

export const LoginModal = ({ showModal, setShowModal }) => {
  const handlePropagation = (e) => e.stopPropagation();
  const { t } = useTranslation("translations");
  const { auth, setAuth, user, setUser, pass, setPass } = useAppContext();
  const handleModal = () => setShowModal(false);

  const proceedLogin = (e) => {
    e.preventDefault();
    if (!validateLogin(auth.authname, auth.authpasswords)) {
      return;
    }
    setShowModal(!showModal);

    setAuth(true);
  };

  if (!showModal) return null;

  return (
    <div onClick={handleModal} className="loginModal">
      <div onClick={handlePropagation} className="content">
        <h2 className="modalTitle"> {t("modal.modalTitle")} </h2>
        <form onSubmit={proceedLogin} className="modalForm">
          <label>{t("modal.modalUsername")}: </label>
          <input
            className="fname"
            name="authname"
            type="text"
            placeholder={t("modal.modalUser")}
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <label>{t("modal.modalPasswords")}:</label>
          <input
            className="fpassword"
            name="authpasswords"
            type="text"
            placeholder={t("modal.modalPlace")}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <button type="submit" className="btn-hover color-3">
            {t("modal.modalSubmit")}
          </button>
        </form>

        <span onClick={handleModal} className="close">
          <i className="bi bi-x-circle" />
        </span>
      </div>
    </div>
  );
};
