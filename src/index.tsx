import * as React from "react";
import * as ReactDom from "react-dom";
import "@/libs/all.min"

import App from "@/App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("token");

  config.headers["authorization"] = `Bearer ${token}`;
  return config;
})

ReactDom.render(
  <App />
  ,
  document.getElementById("root")
);
