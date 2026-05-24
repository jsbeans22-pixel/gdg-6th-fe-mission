import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import CategoryPage from "./pages/CategoryPage.jsx";
import PricePage from "./pages/PricePage.jsx";
import SortPage from "./pages/SortPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "category",
    element: <CategoryPage />,
  },
  {
    path: "/price",
    element: <PricePage />,
  },
  {
    path: "/sort",
    element: <SortPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
