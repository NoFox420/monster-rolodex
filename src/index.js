import React from "react";
// instead of importing ReactDOM we import createRoot
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// setting the root element in a const
const container = document.getElementById("root");

//creating root const based on createRoot, passing it the element
const root = createRoot(container);

// placing the application in render method
root.render(
  // enforces to not use deprecated methods from react
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
