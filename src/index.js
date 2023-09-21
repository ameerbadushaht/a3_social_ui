import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />  
    </BrowserRouter>
  </React.StrictMode>
);
