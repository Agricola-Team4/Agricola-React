import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import { AuthContextProvider } from "./context/AuthContext";
import DragTest from "./components/DragTest";
import { BackgroundContextProvider } from "./context/BackgroundContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>에러</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dragTest",
    element: <DragTest />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BackgroundContextProvider>
        <RouterProvider router={router} />
      </BackgroundContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
