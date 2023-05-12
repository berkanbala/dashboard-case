import React from "react";
import ReactDOM from "react-dom/client";
import { AppContext } from "./common/context/appContext";
import { AppRoutes } from "app/routes/appRoutes";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./common/components/i18n";
import "./index.css";
import { AllModals } from "common/modals/allModals/allModals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppContext>
      <AppRoutes />
      <AllModals />
    </AppContext>
  </React.StrictMode>
);
