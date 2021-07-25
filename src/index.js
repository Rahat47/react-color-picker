import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop.jsx";

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
