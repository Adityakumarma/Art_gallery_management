import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ArtStore from "./Redux/CartStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
     <Provider store={ArtStore}> <App /></Provider>
    </BrowserRouter>
  </StrictMode>
);
