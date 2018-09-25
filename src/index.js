import React from "react";
import ReactDOM from "react-dom";
import App from "./js/components/app/App";
import style from "./main.css";
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;