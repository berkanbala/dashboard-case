import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppContext } from "common/context/appContext";
import Icontr from "common/media/icons/tr.png";
import Iconen from "common/media/icons/uk.png";
import "./header.css";

export const Header = () => {
  const { auth, user, setAuth, loginModalVisible, setLoginModalVisible } =
    useAppContext();
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation("translations");
  const changeLanguage = (e) => i18n.changeLanguage(e.target.value);
  const handleModal = () => setLoginModalVisible(!loginModalVisible);
  const handleOpenToggle = () => setToggle(!toggle);
  const handleExit = () => setAuth(false);

  return (
    <div className="navbar">
      <div className="navbarsub">
        <div className="navbarsub-list">
          <ul id="myTopnav">
            <li className="title">
              <h2>TASK || CASE</h2>
            </li>

            <li
              className="item"
              style={{
                marginLeft: "60px",
              }}
            >
              <Link className="link" to="/">
                {t("navi.home")}
              </Link>
            </li>

            <li
              className="item"
              style={{
                marginLeft: "60px",
              }}
            >
              <Link className="link" to="/contact">
                {t("navi.contact")}
              </Link>
            </li>
          </ul>
        </div>

        <ul
          className="item"
          style={{
            marginRight: "40px",
          }}
        >
          <li className="toggle" onClick={handleOpenToggle}>
            <i className="fas fa-align-justify" />
          </li>

          {auth ? (
            <li>
              <div className="dropdown">
                <button className="dropbtn">
                  <b> {user}</b>
                </button>
                <div className="dropdown-content">
                  <a href="#!" onClick={handleExit}>
                    {t("navi.logout")}
                  </a>
                </div>
              </div>
            </li>
          ) : (
            <li>
              <div className="dropdown">
                <button className="dropbtnx" onClick={handleModal}>
                  <b>{t("navi.login")}</b>
                </button>
              </div>
            </li>
          )}

          <li
            className="item"
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
              className="btnx"
            />
          </li>

          <li
            className="item"
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
              className="btnx"
              style={{ marginLeft: "10px" }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
