import React from "react";
import "./HomePage.css";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation("translations");

  return (
    <div className="home">
      <h2 className="title"> {t("content.loremTitle")} </h2>
      <p className="lorem">{t("content.loremTitleContents")}</p>
    </div>
  );
};
