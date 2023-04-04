import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layouts/Layout";
import "./index.css";
import LoadingContextProvider from "./context/LoadingContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <LoadingContextProvider>
        <Layout>
          <App />
        </Layout>
      </LoadingContextProvider>
    </Router>
  </React.StrictMode>
);
