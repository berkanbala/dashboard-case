import { useTranslation } from "react-i18next";

export const Button = (props) => {
  const { type, onClick, className, user } = props;
  const { t } = useTranslation("translations");

  return (
    <div>
      <button type={type} onClick={onClick} className={className} user={user}>
        {t("contact.button")}
      </button>
    </div>
  );
};
