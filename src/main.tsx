import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layouts/Layout";
import "./index.css";
import { QueryClientProvider } from "react-query";
import { client } from "./services/reactQuery";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Router>
        <Layout>
          <App />
        </Layout>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
