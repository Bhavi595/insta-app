import React from "react";
import reactDom from "react-dom"
import App from "./App.js";
import { render } from "@testing-library/react";

reactDom.render(<App/> , document.getElementById("root"));
