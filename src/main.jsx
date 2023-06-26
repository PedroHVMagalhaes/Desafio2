import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import { DB } from "./Mock/task.mock.js";
import Sobre from "./Componentes/Pages/Sobre/Sobre.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App data={DB} />,
  },

  {
    path: "/",
    element: <Sobre />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
