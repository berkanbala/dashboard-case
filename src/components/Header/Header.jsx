import React from "react";
import { Link } from "react-router-dom";
import { LoginModal } from "../LoginModal/LoginModal";
import { useState } from "react";
import { useAppContext } from "../auth/AuthProvider";
import { Toggle } from "../toogle";
import Icontr from "../../images/tr.png";
import Iconen from "../../images/uk.png";
import "./Header.css";
import "../../i18n";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { auth, user, setAuth } = useAppContext();
  const [showModal, setShowModal] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation("translations");
  const changeLanguage = (e) => i18n.changeLanguage(e.target.value);
  const handleModal = () => setShowModal(!showModal);
  const handleOpenToggle = () => setToggle(!toggle);
  const handleExit = () => setAuth(false);
  console.log(auth);
  return (
    <div className="navbar">
      <nav className="navbarsub">
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
                  <a href="#" onClick={handleExit}>
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
      </nav>

      <LoginModal showModal={showModal} setShowModal={setShowModal} />

      <Toggle
        toggle={toggle}
        handleOpenToggle={handleOpenToggle}
        changeLanguage={changeLanguage}
        Icontr={Icontr}
        Iconen={Iconen}
      />
    </div>
  );
};
