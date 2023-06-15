import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppContext } from "common/context/appContext";
import IconTR from "common/media/icons/tr.png";
import IconEN from "common/media/icons/uk.png";
import IconMenu from "common/media/icons/hamburger.svg";
import IconCross from "common/media/icons/cross.svg";
import styles from "./header.module.scss";
import { Input } from "common/components/ui/input/input";
import clsx from "clsx";

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
  const changeLanguage = (e: any) => i18n.changeLanguage(e.target.value);
  const handleModal = () => setLoginModalVisible(!loginModalVisible);

  const handleOpenToggle = () => setToggle(!toggle);

  const handleExit = () => {
    setAuth(false);
    setUser("");
    setPass("");
  };

  const renderIsAuthToSite = () => {
    if (auth) {
      return (
        <li className={styles.login}>
          <div className={styles.title}>{user}</div>
          <div className={styles.subTitle}>
            <span onClick={handleExit}>{t("navi.logout")}</span>
          </div>
        </li>
      );
    } else {
      return (
        <li className={styles.login} onClick={handleModal}>
          <div className={styles.title}>{t("navi.login")}</div>
        </li>
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <ul>
          <li>
            <h2>TASK || CASE</h2>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              {t("navi.home")}
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/contact">
              {t("navi.contact")}
            </Link>
          </li>
        </ul>
        <ul className={styles.options}>
          {renderIsAuthToSite()}
          <li className={styles.toggle} onClick={handleOpenToggle}>
            <img src={IconMenu} alt="icon" />
          </li>
          <li className={styles.item}>
            <Input
              type="image"
              value="tr"
              onClick={changeLanguage}
              className={styles.flags}
              src={IconTR}
            />
          </li>
          <li className={styles.item}>
            <Input
              type="image"
              value="en"
              onClick={changeLanguage}
              src={IconEN}
              className={styles.flags}
            />
          </li>
        </ul>
      </div>

      <div
        className={clsx(styles.overlayMenu, toggle && styles.responsiveMenu)}
      >
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.languages}>
              <Input
                type="image"
                value="tr"
                onClick={changeLanguage}
                src={IconTR}
                className={styles.flags}
              />
              <Input
                type="image"
                value="en"
                onClick={changeLanguage}
                src={IconEN}
                className={styles.flags}
              />
            </div>
            <img src={IconCross} alt="icon" onClick={handleOpenToggle} />
            {/* <img src="" alt="icon" onClick={handleOpenToggle} /> */}
          </div>
          <div className={styles.caption}>Menu</div>
          <div className={styles.bottom}>
            <Link className={styles.link} to="/">
              {t("toggle.home")}
            </Link>
            <Link className={styles.link} to="/contact">
              {t("toggle.contact")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
