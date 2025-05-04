import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Helmet } from "react-helmet";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Helmet>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js"></script>
      </Helmet>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
