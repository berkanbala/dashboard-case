import React from "react";
import ReactDOM from "react-dom/client";
import { AppContext } from "./common/context/appContext";
import { AppRoutes } from "app/routes/appRoutes";
import { AllModals } from "common/modals/allModals/allModals";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./common/components/i18n";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppContext>
      <AppRoutes />
      <AllModals />
    </AppContext>
  </React.StrictMode>
);
