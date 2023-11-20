import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import TestArea from "./TestArea/TestArea.jsx";
import "./css/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <TestArea />
  </React.StrictMode>
);
