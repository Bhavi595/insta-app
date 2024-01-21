import React from "react";
import reactDom from "react-dom";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserProvide.js";

reactDom.render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>,
  document.getElementById("root")
);
