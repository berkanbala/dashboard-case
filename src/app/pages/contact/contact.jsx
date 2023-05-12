import { validate } from "../../../common/modals/validation";
import { useTranslation } from "react-i18next";
import { useFormHook } from "common/hooks/useFormHook";
import { Header } from "common/components/layout/header/header";
import { Footer } from "common/components/layout/footer/footer";
import { Input } from "common/components/ui/input/input";
import styles from "./contact.module.scss";

export const Contact = () => {
  const initialValues = {
    fname: "",
    email: "",
    phone: "",
    textarea: "",
  };

  const { t } = useTranslation("translations");
  const [form, setForm] = useFormHook(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate(form)) {
      return;
    }
    console.log(form);
    setForm(initialValues);
  };

  return (
    <div className={styles.container}>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          {/* <h1> {t("contact.title")} </h1> */}

          <Input
            className={styles.formInput}
            type="text"
            placeholder={t("contact.contactPlace")}
            name="fname"
            value={form.fname}
            onChange={setForm}
            label={t("contact.firstName")}
          />
          {/*
        <label> {t("contact.firstName")}: </label>
        <input
          className="contactName"
          type="text"
          placeholder={t("contact.contactPlace")}
          name="fname"
          value={form.fname}
          onChange={setForm}
        /> */}
          {/* <label> {t("contact.email")}: </label>
        <input
          className="contactEmail"
          type="email"
          placeholder={t("contact.contactEmail")}
          name="email"
          value={form.email}
          onChange={setForm}
        />
        <label> {t("contact.phoneNumber")}: </label>
        <input
          className="contactText"
          type="text"
          placeholder={t("contact.contactPhone")}
          name="phone"
          value={form.phone}
          onChange={setForm}
        />
        <label> {t("contact.textarea")}: </label>
        <textarea
          className={styles.message}
          placeholder={t("contact.contactText")}
          name="textarea"
          value={form.textarea}
          onChange={setForm}
        /> */}
          <button className="btn-hover color-3" type="submit">
            {t("contact.button")}
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
};
