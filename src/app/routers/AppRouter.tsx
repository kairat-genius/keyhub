import { createBrowserRouter } from "react-router";
import AppLayout from "../AppLayout";
import Loader from "@/shared/ui/loader/Loader";
import NotFound from "@/shared/ui/NotFound";
import ErrorPage from "@/shared/ui/ErrorPage";

export const router = createBrowserRouter([
  {
    HydrateFallback: Loader,
    errorElement: <ErrorPage />,
    element: <AppLayout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const HomePage = await import("@/pages/home");
          return { Component: HomePage.default };
        },
      },
      {
        path: "about-us",
        lazy: async () => {
          const AboutUsPage = await import("@/pages/about-us");
          return { Component: AboutUsPage.default };
        },
      },
        {
        path: "terms-and-conditions",
        lazy: async () => {
          const AboutUsPage = await import("@/pages/terms-and-conditions");
          return { Component: AboutUsPage.default };
        },
      },
      {
        path: "privacy-policy",
        lazy: async () => {
          const AboutUsPage = await import("@/pages/privacy-policy");
          return { Component: AboutUsPage.default };
        },
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
