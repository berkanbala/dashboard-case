import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppContext } from "common/context/appContext";
import Icontr from "common/media/icons/tr.png";
import Iconen from "common/media/icons/uk.png";
import styles from "./header.module.scss";
import { Button } from "common/components/ui/button/button";

export const Header = () => {
  const {
    auth,
    user,
    setUser,
    setAuth,
    setPass,
    loginModalVisible,
    setLoginModalVisible,
  } = useAppContext();
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation("translations");
  const changeLanguage = (e) => i18n.changeLanguage(e.target.value);
  const handleModal = () => setLoginModalVisible(!loginModalVisible);
  const handleOpenToggle = () => setToggle(!toggle);
  const handleExit = () => {
    setAuth(false);
    setUser("");
    setPass("");
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarsub}>
        <div className={styles.navbarsublist}>
          <ul id="myTopnav">
            <li className={styles.title}>
              <h2>TASK || CASE</h2>
            </li>

            <li
              className={styles.item}
              style={{
                marginLeft: "60px",
              }}
            >
              <Link className={styles.link} to="/">
                {t("navi.home")}
              </Link>
            </li>

            <li
              className={styles.item}
              style={{
                marginLeft: "60px",
              }}
            >
              <Link className={styles.link} to="/contact">
                {t("navi.contact")}
              </Link>
            </li>
          </ul>
        </div>

        <ul
          className={styles.item}
          style={{
            marginRight: "40px",
          }}
        >
          <li className={styles.toggle} onClick={handleOpenToggle}>
            {/* <i className="fas fa-align-justify" /> */}
          </li>

          {auth ? (
            <li className={styles.dropdown}>
              <Button className={styles.dropbtn}>
                <b> {user} </b>
              </Button>

              {/* <button className={styles.dropbtn}>
                <b> {user}</b>
              </button> */}

              <div className={styles.dropdowncontent}>
                <span onClick={handleExit}>{t("navi.logout")}</span>
              </div>
            </li>
          ) : (
            <li className={styles.dropdown}>
              <Button className={styles.dropbtnx} onClick={handleModal}>
                <b>{t("navi.login")}</b>
              </Button>

              {/* <button className={styles.dropbtnx} onClick={handleModal}>
                <b>{t("navi.login")}</b>
              </button> */}
            </li>
          )}

          <li
            className={styles.item}
            style={{
              marginLeft: "20px",
            }}
          >
            <input
              type="image"
              value="tr"
              onClick={changeLanguage}
              src={Icontr}
              alt="TR"
              className={styles.btnx}
            />
          </li>

          <li
            className={styles.item}
            style={{
              marginLeft: "20px",
            }}
          >
            <input
              type="image"
              value="en"
              onClick={changeLanguage}
              src={Iconen}
              alt="EN"
              className={styles.btnx}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
