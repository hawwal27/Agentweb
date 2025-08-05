// main.jsx or index.js
import React from "react";
import ReactDOM from "react-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css';

const PUBLISHABLE_KEY = "pk_test_bG95YWwtdGFkcG9sZS0zNC5jbGVyay5hY2NvdW50cy5kZXYk";

ReactDOM.render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App />
  </ClerkProvider>,
  document.getElementById("root")
);

