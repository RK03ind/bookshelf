import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BookDataProvider } from "./context/BookDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookDataProvider>
      <App />
    </BookDataProvider>
  </React.StrictMode>
);
