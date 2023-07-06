import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./routes/ErrorPage";
import { MainPage } from "./pages/MainPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/main-page",
        element: <MainPage />,
      },
    ],
  },
]);
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
