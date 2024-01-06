import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./style/modern-normalize.scss";
import "./style/style.scss";
import "./style/utils.scss";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
