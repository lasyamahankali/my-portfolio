import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      richColors
      closeButton
      theme="dark"
      toastOptions={{
        style: {
          background: "linear-gradient(135deg, rgba(17,24,39,0.85), rgba(11,15,25,0.75))",
          backdropFilter: "blur(20px) saturate(160%)",
          border: "1px solid rgba(139,92,246,0.25)",
          color: "#fff",
        },
      }}
    />
  </React.StrictMode>
);
