import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { JobPostingContextProvider } from "./context/JobPostingContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <JobPostingContextProvider>
        <App />
      </JobPostingContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
