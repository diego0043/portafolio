import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();
import "./main.css";
import 'animate.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
