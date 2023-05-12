import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "common/components/layout/header/header";
import { Footer } from "common/components/layout/footer/footer";
import styles from "./home.module.scss";

export const Home = () => {
  const { t } = useTranslation("translations");

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h2 className={styles.title}> {t("content.loremTitle")} </h2>
        <p className={styles.text}>{t("content.loremTitleContents")}</p>
      </div>
      <Footer />
    </div>
  );
};
