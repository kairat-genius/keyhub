import { createBrowserRouter } from "react-router";
import AppLayout from "../AppLayout";
import HomePage from "@/page/home";
import KeysPage from "@/page/keys";
import DetailPage from "@/page/detail";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "keys",
        Component: KeysPage,
      },
      {
        path: "detail",
        Component: DetailPage,
      },
    ],
  },
]);
