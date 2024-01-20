import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthcontextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthcontextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthcontextProvider>
);
