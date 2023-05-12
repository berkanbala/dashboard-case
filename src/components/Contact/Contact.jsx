import React from "react";
import "./Contact.css";
import { useFormHook } from "../../hooks/useFormHook";
import { validate } from "../validation";
import { useTranslation } from "react-i18next";
import "../../i18n";

const initialValues = {
  fname: "",
  email: "",
  phone: "",
  textarea: "",
};

export const Contact = () => {
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
    <div className="contact">
      <div className="contactSub">
        <form className="contactForm" action="#" onSubmit={handleSubmit}>
          <h1> {t("contact.title")} </h1>

          <label> {t("contact.firstName")}: </label>
          <input
            className="contactName"
            type="text"
            placeholder={t("contact.contactPlace")}
            name="fname"
            value={form.fname}
            onChange={setForm}
          />

          <label> {t("contact.email")}: </label>
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
            className="message"
            placeholder={t("contact.contactText")}
            name="textarea"
            value={form.textarea}
            onChange={setForm}
          ></textarea>

          <button className="btn-hover color-3" type="submit">
            {t("contact.button")}
          </button>
        </form>
      </div>
    </div>
  );
};
