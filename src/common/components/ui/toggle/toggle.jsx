import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./toggle.module.scss";
import { Input } from "../input/input";

export const Toggle = ({
  toggle,
  handleOpenToggle,
  changeLanguage,
  Icontr,
  Iconen,
}) => {
  const { t } = useTranslation("translations");

  return (
    <div className={clsx(styles.overlay, toggle && styles.menu)}>
      <a href="#!" className={styles.closebtn} onClick={handleOpenToggle}>
        &times;
      </a>
      <div className={styles.overlayContent}>
        <ul>
          <div className={styles.overlayLang}>
            <li
              style={{
                marginBottom: "10px",
                marginRight: "30px",
              }}
            >
              {/* <input
                type="image"
                value="tr"
                onClick={changeLanguage}
                src={Icontr}
                alt="TR"
                className={styles.btnx}
              /> */}
              <Input
                type="image"
                value="tr"
                onClick={changeLanguage}
                src={Icontr}
                alt="TR"
                className={styles.btnx}
              />
            </li>
            <li style={{ marginBottom: "10px", marginRight: "30px" }}>
              {/* <input
                type="image"
                value="en"
                onClick={changeLanguage}
                src={Iconen}
                alt="EN"
                className={styles.btnx}
              /> */}
              <Input
                type="image"
                value="en"
                onClick={changeLanguage}
                src={Iconen}
                alt="EN"
                className={styles.btnx}
              />
            </li>
          </div>

          <div onClick={handleOpenToggle}>
            <li>
              <Link className={styles.link} to="/">
                {t("toggle.home")}
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/contact">
                {t("toggle.contact")}
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
