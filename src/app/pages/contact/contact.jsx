import { validate } from "../../../common/modals/validation";
import { useTranslation } from "react-i18next";
import { useFormHook } from "common/hooks/useFormHook";
import { Header } from "common/components/layout/header/header";
import { Footer } from "common/components/layout/footer/footer";
import { Input } from "common/components/ui/input/input";
import { Button } from "common/components/ui/button/button";
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
          <h1> {t("contact.title")} </h1>

          <Input
            className={styles.formInput}
            type="text"
            placeholder={t("contact.contactPlace")}
            name="fname"
            value={form.fname}
            onChange={setForm}
            // label={t("contact.firstName")}
          />

          <Input
            className={styles.formInput}
            type="email"
            placeholder={t("contact.contactEmail")}
            name="email"
            value={form.email}
            onChange={setForm}
            // label={t("contact.email")}
          />

          <Input
            className={styles.formInput}
            type="tel"
            placeholder={t("contact.contactPhone")}
            maxlength={"1"}
            name="phone"
            pattern="[0-9]{10}"
            value={form.phone}
            onChange={setForm}
            // label={t("contact.phoneNumber")}
          />

          <Input
            className={styles.textArea}
            type="text"
            placeholder={t("contact.contactText")}
            name="textarea"
            value={form.textarea}
            onChange={setForm}
            // label={t("contact.textarea")}
          />

          <Button
            type="submit"
            className={styles.button}
            text={t("contact.button")}
            disabled={
              // form.fname !== "" &&
              // form.feamil !== "" &&
              // form.phone !== "" &&
              // form.text !== ""
              Object.values(form).some((formValue) => formValue === "")
            }
          />
        </div>
      </form>

      <Footer />
    </div>
  );
};
